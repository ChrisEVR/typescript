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
var LocationC = /** @class */ (function () {
    function LocationC(city) {
        this.persons = [];
        this.city = city;
    }
    LocationC.prototype.setCity = function (city) {
        this.city = city;
    };
    LocationC.prototype.getPersons = function () {
        return this.persons;
    };
    LocationC.prototype.getCity = function () {
        return this.city;
    };
    LocationC.prototype.addPerson = function (person) {
        this.persons.push(person);
    };
    LocationC.prototype.getPerson = function (index) {
        return this.persons[index];
    };
    LocationC.prototype.getCount = function () {
        return this.persons.length;
    };
    return LocationC;
}());
var Company = /** @class */ (function () {
    function Company(type, city) {
        this.location = new type(city);
    }
    Company.prototype.add = function (employee) {
        this.location.addPerson(employee);
    };
    Company.prototype.getProjectList = function () {
        return this.location.getPersons().map(function (employee) { return employee.getCurrentProject(); });
    };
    Company.prototype.getNameList = function () {
        return this.location.getPersons().map(function (employee) { return employee.getName(); });
    };
    return Company;
}());
var CompanyLocationArray = /** @class */ (function () {
    function CompanyLocationArray(city) {
        this.persons = [];
        this.city = city;
    }
    CompanyLocationArray.prototype.setCity = function (city) {
        this.city = city;
    };
    CompanyLocationArray.prototype.getCity = function () {
        return this.city;
    };
    CompanyLocationArray.prototype.addPerson = function (person) {
        this.persons.push(person);
    };
    CompanyLocationArray.prototype.getPerson = function (index) {
        return this.persons[index];
    };
    CompanyLocationArray.prototype.getCount = function () {
        return this.persons.length;
    };
    CompanyLocationArray.prototype.getProjectList = function () {
        return this.persons.map(function (employee) { return employee.getCurrentProject(); });
    };
    CompanyLocationArray.prototype.getNameList = function () {
        return this.persons.map(function (employee) { return employee.getName(); });
    };
    return CompanyLocationArray;
}());
var CompanyLocationLocalStorage = /** @class */ (function () {
    function CompanyLocationLocalStorage(city) {
        this.storageKey = "companyLocationLocalStorage";
        this.city = city;
    }
    CompanyLocationLocalStorage.prototype.addPerson = function (person) {
        var storedArrayString = localStorage.getItem(this.storageKey);
        if (storedArrayString) {
            var storedArray = JSON.parse(storedArrayString);
            storedArray.push(person);
            localStorage.setItem(this.storageKey, JSON.stringify(storedArray));
        }
        else {
            var persons = [person];
            localStorage.setItem(this.storageKey, JSON.stringify(persons));
        }
    };
    CompanyLocationLocalStorage.prototype.getPerson = function (index) {
        var storedArrayString = localStorage.getItem(this.storageKey);
        var person = null;
        if (storedArrayString) {
            var storedArray = JSON.parse(storedArrayString);
            person = storedArray[index];
        }
        return person;
    };
    CompanyLocationLocalStorage.prototype.getCount = function () {
        var storedArrayString = localStorage.getItem(this.storageKey);
        var count = storedArrayString ? JSON.parse(storedArrayString).length : 0;
        return count;
    };
    CompanyLocationLocalStorage.prototype.getCity = function () {
        return this.city;
    };
    CompanyLocationLocalStorage.prototype.setCity = function (city) {
        this.city = city;
    };
    CompanyLocationLocalStorage.prototype.getProjectList = function () {
        var storedArrayString = localStorage.getItem(this.storageKey);
        var result = [];
        if (storedArrayString) {
            var storedArray = JSON.parse(storedArrayString);
            var employeeArray = storedArray.map(function (obj) { return new Employee(obj.name, obj.currentProject); });
            result = employeeArray.map(function (employee) { return employee.getCurrentProject(); });
        }
        return result;
    };
    CompanyLocationLocalStorage.prototype.getNameList = function () {
        var storedArrayString = localStorage.getItem(this.storageKey);
        var result = [];
        if (storedArrayString) {
            var storedArray = JSON.parse(storedArrayString);
            var employeeArray = storedArray.map(function (obj) { return new Employee(obj.name, obj.currentProject); });
            result = employeeArray.map(function (employee) { return employee.getName(); });
        }
        return result;
    };
    return CompanyLocationLocalStorage;
}());
console.log("British Company");
var company1 = new Company(LocationC, "City1");
var company2 = new CompanyLocationArray("City2");
var company3 = new CompanyLocationLocalStorage("City3");
var employee1 = new Employee("Employee1", "Project1");
var employee2 = new Employee("Employee2", "Project2");
var employee3 = new Employee("Employee3", "Project3");
var employee4 = new Employee("Employee4", "Project4");
var employee5 = new Employee("Employee5", "Project5");
var employee6 = new Employee("Employee6", "Project6");
company1.add(employee1);
company1.add(employee2);
company2.addPerson(employee3);
company2.addPerson(employee4);
company3.addPerson(employee5);
company3.addPerson(employee6);
console.log(company1.getNameList());
console.log(company1.getProjectList());
console.log(company2.getNameList());
console.log(company2.getProjectList());
console.log(company3.getNameList());
console.log(company3.getProjectList());
