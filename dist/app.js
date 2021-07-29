"use strict";
var ProjectInput = /** @class */ (function () {
    function ProjectInput() {
        var _this = this;
        this.attach = function () {
            _this.hostElement.insertAdjacentElement('afterbegin', _this.element);
        };
        this.submitHandler = function (event) {
            console.log('Submitted', _this.titleInputElement.value);
            event.preventDefault();
        };
        this.configure = function () {
            _this.element.addEventListener('submit', _this.submitHandler);
        };
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        var importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = 'user-input';
        this.titleInputElement = this.element.querySelector('#title');
        this.descriptionInputElement = this.element.querySelector('#description');
        this.peopleInputElement = this.element.querySelector('#people');
        this.configure();
        this.attach();
    }
    return ProjectInput;
}());
var f = new ProjectInput();
console.log(f);
