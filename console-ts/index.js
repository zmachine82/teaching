"use strict";
exports.__esModule = true;
var rl = require("readline-sync");
var Menu = /** @class */ (function () {
    function Menu(options) {
        this.finished = false;
        this.options = options;
    }
    Menu.prototype.displayOptions = function () {
        this.options.forEach(function (option) {
            console.log(option.displayOption());
        });
        this.listenForOption();
    };
    Menu.prototype.listenForOption = function () {
        var result = rl.question('');
        var optionResult = this.chooseOption(result);
        if (optionResult === true) {
            return;
        }
        this.displayOptions();
    };
    Menu.prototype.chooseOption = function (result) {
        var foundOptions = this.options.filter(function (option) { return option.selectKey === result; });
        if (foundOptions.length > 0) {
            return foundOptions[0].doesSomething();
        }
        else {
            console.log('Could not find option ' + result);
            return;
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
        return this.whatToDoWhenSelected();
    };
    Option.prototype.displayOption = function () {
        return this.selectKey + ' -- ' + this.displayText;
    };
    return Option;
}());
var menu = new Menu([
    new Option('q', 'quit', function () {
        process.exit();
    }),
    new Option('1', 'see todos', function () {
        showTodos();
    }),
    new Option('2', 'see useless submenu', function () {
        var submenu = new Menu([new Option('b', 'go back', function () {
                return true;
            })]);
        submenu.displayOptions();
    })
]);
console.log('Welcome to Todos');
menu.displayOptions();
function showTodos() {
    var todos = ['first todo', 'learn typescript', 'cry on the inside'];
    todos.forEach(function (todo) { return console.log(todo); });
}
