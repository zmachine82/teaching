import readline = require('node:readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
class Menu {
    options: Option[];

    constructor(options: Option[]) {
        this.options = options;
    }

    displayOptions() {
        this.options.forEach(option => {
            console.log(option.displayText)
        })
    }

    chooseOption(result: string) {
        const foundOptions = this.options.filter(option =>option.selectKey === result)
        if(foundOptions.length > 0) {
            foundOptions[0].doesSomething()
        }
    }
}

class Option {
    selectKey: string;
    displayText: string;

    constructor( selectKey: string, displayText: string, private whatToDoWhenSelected: () => void) {
        this.selectKey = selectKey;
        this.displayText = displayText
    }

    doesSomething() {
        this.whatToDoWhenSelected()
    }

}



const menu = new Menu([
    new Option('q', 'type q to quit', () => {
        rl.close()
        process.exit();
    }),
    new Option('1', 'press 1. to see todos', () => {
        showTodos()
    }),
    new Option('2', 'press 2. to see useless submenu', () => {
        const submenu = new Menu([new Option('b', 'go back', () => {})])
        displayMenu(submenu)
    })
])



displayMenu(menu)



function displayMenu(menu: Menu) {
    console.log('Welcome to Todos')

    menu.displayOptions()
  

    rl.question('', (result: string) => {

        menu.chooseOption(result)
        displayMenu(menu)
    })
}

function showTodos() {
    const todos = ['first todo', 'learn typescript', 'cry on the inside']
    todos.forEach(todo => console.log(todo))
}



