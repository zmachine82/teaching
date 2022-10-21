import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emoji'
})
export class EmojiPipe implements PipeTransform {

  emojiList = {
    hamster: '🐹',
    porcupine: '🦔',
    cat: '🐱'
  }

  transform(value: string, emoji: Emoji = 'hamster' ): string {

    return `${this.emojiList[emoji]} ${value} ${this.emojiList[emoji]}`;
  }

}

type Emoji = 'hamster' | 'porcupine'| 'cat'
