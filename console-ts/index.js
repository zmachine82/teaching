"use strict";
exports.__esModule = true;
var readline = require("node:readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var Menu = /** @class */ (function () {
    function Menu(options) {
        this.options = options;
    }
    Menu.prototype.displayOptions = function () {
        this.options.forEach(function (option) {
            console.log(option.displayText);
        });
    };
    Menu.prototype.chooseOption = function (result) {
        var foundOptions = this.options.filter(function (option) { return option.selectKey === result; });
        if (foundOptions.length > 0) {
            foundOptions[0].doesSomething();
        }
    };
    return Menu;
}());
var Option = /** @class */ (function () {
    function Option(selectKey, displayText, whatToDoWhenSelected) {
        this.whatToDoWhenSelected = whatToDoWhenSelected;
        this.selectKey = selectKey;
        this.displayText = displayText;
    }
    Option.prototype.doesSomething = function () {
        this.whatToDoWhenSelected();
    };
    return Option;
}());
var menu = new Menu([
    new Option('q', 'type q to quit', function () {
        rl.close();
        process.exit();
    }),
    new Option('1', 'press 1. to see todos', function () {
        showTodos();
    }),
    new Option('2', 'press 2. to see useless submenu', function () {
        var submenu = new Menu([new Option('b', 'go back', function () { })]);
        displayMenu(submenu);
    })
]);
displayMenu(menu);
function displayMenu(menu) {
    console.log('Welcome to Todos');
    menu.displayOptions();
    rl.question('', function (result) {
        menu.chooseOption(result);
        displayMenu(menu);
    });
}
function showTodos() {
    var todos = ['first todo', 'learn typescript', 'cry on the inside'];
    todos.forEach(function (todo) { return console.log(todo); });
}
