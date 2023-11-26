var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, currentProject) {
        this.name = name;
        this.currentProject = currentProject;
    }
    Employee.prototype.setCurrentProject = function (currentProject) {
        this.currentProject = currentProject;
    };
    Employee.prototype.setName = function (name) {
        this.name = name;
    };
    Employee.prototype.getCurrentProject = function () {
        return this.currentProject;
    };
    Employee.prototype.getName = function () {
        return this.name;
    };
    return Employee;
}());
var Company = /** @class */ (function () {
    function Company() {
        this.employees = [];
    }
    Company.prototype.add = function (employee) {
        this.employees.push(employee);
    };
    Company.prototype.getProjectList = function () {
        return this.employees.map(function (employee) { return employee.getCurrentProject(); });
    };
    Company.prototype.getNameList = function () {
        return this.employees.map(function (employee) { return employee.getName(); });
    };
    return Company;
}());
var Frontend = /** @class */ (function (_super) {
    __extends(Frontend, _super);
    function Frontend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Frontend;
}(Employee));
var Backend = /** @class */ (function (_super) {
    __extends(Backend, _super);
    function Backend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Backend;
}(Employee));
console.log("Europe Company");
var company = new Company();
var frontend1 = new Frontend("Frontend1", "Project1");
var frontend2 = new Frontend("Frontend2", "Project2");
var frontend3 = new Frontend("Frontend3", "Project3");
var backend1 = new Backend("Backend1", "Project1");
var backend2 = new Backend("Backend2", "Project2");
var backend3 = new Backend("Backend3", "Project3");
company.add(frontend1);
company.add(frontend2);
company.add(frontend3);
company.add(backend1);
company.add(backend2);
company.add(backend3);
console.log(company.getNameList());
console.log(company.getProjectList());
