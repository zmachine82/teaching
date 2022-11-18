import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { StringCalculator } from '../string-calc';

import { StringCalcComponent } from './string-calc.component';

describe('StringCalcComponent', () => {
  let component: StringCalcComponent;
  let fixture: ComponentFixture<StringCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringCalcComponent ],
      imports: [FormsModule],
      providers: [
        {provide: StringCalculator, useValue: { add: () => {}}}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display string calc result when typed in with comma', () => {
    spyOn(TestBed.inject(StringCalculator), 'add').and.returnValue(6)

    const inputBox = fixture.debugElement.query(By.css('input'));
    inputBox.nativeElement.value = '2,2';
    inputBox.nativeElement.dispatchEvent(new Event('input'));

    fixture.detectChanges()

    const button = fixture.debugElement.query(By.css('button'))
    button.nativeElement.click()
    fixture.detectChanges()

    const result = fixture.debugElement.query(By.css('h2'))

    expect(result.nativeElement.textContent).toEqual('6');

    expect(inputBox).toBeTruthy()
  });


});
