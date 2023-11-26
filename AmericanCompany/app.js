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
var Frontend = /** @class */ (function () {
    function Frontend(name, currentProject) {
        this.name = name;
        this.currentProject = currentProject;
    }
    Frontend.prototype.setCurrentProject = function (currentProject) {
        this.currentProject = currentProject;
    };
    Frontend.prototype.setName = function (name) {
        this.name = name;
    };
    Frontend.prototype.getCurrentProject = function () {
        return this.currentProject;
    };
    Frontend.prototype.getName = function () {
        return this.name;
    };
    return Frontend;
}());
var Backend = /** @class */ (function () {
    function Backend(name, currentProject) {
        this.name = name;
        this.currentProject = currentProject;
    }
    Backend.prototype.setCurrentProject = function (currentProject) {
        this.currentProject = currentProject;
    };
    Backend.prototype.setName = function (name) {
        this.name = name;
    };
    Backend.prototype.getCurrentProject = function () {
        return this.currentProject;
    };
    Backend.prototype.getName = function () {
        return this.name;
    };
    return Backend;
}());
console.log("American Company");
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
