import rl = require('readline-sync')

class Menu {
    options: Option[];
    private finished = false

    constructor(options: Option[]) {
        this.options = options;
    }

     displayOptions() {
        this.options.forEach(option => {
            console.log(option.displayOption())
        })
        this.listenForOption()
    }

    listenForOption() {
        const result =  rl.question('')

        const optionResult = this.chooseOption(result)
        if(optionResult=== true ) {
            return; 
        }
        this.displayOptions()
    }

    chooseOption(result: string) {
        const foundOptions = this.options.filter(option =>option.selectKey === result)
        if(foundOptions.length > 0) {
            return foundOptions[0].doesSomething()
        } else {
            console.log('Could not find option ' + result)
            return;
        }
    }
}

class Option {
    selectKey: string;
    displayText: string;

    constructor( selectKey: string, displayText: string, private whatToDoWhenSelected: () => boolean | void) {
        this.selectKey = selectKey;
        this.displayText = displayText
    }

    doesSomething() {
        return this.whatToDoWhenSelected()
        
    }

    displayOption() {
        return this.selectKey + ' -- ' + this.displayText
    }

}



const menu = new Menu([
    new Option('q', 'quit', () => {
        process.exit();
    }),
    new Option('1', 'see todos', () => {
        showTodos()
    }),
    new Option('2', 'see useless submenu', () => {
        const submenu = new Menu([new Option('b', 'go back', () => {
            return true;
        })])
        submenu.displayOptions()
    })
])


console.log('Welcome to Todos')

menu.displayOptions()



function showTodos() {
    const todos = ['first todo', 'learn typescript', 'cry on the inside']
    todos.forEach(todo => console.log(todo))
}



