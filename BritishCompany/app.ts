interface Person {
    setName(name: string): void;
    getName(): string;
    setCurrentProject(name: string): void;
    getCurrentProject(): string;
}

class Employee implements Person {
    private name: string;
    private currentProject: string;

    constructor(name: string, currentProject: string){
        this.name = name;
        this.currentProject = currentProject;
    }

    setCurrentProject(currentProject: string): void {
        this.currentProject = currentProject;
    }

    setName(name: string): void {
        this.name = name;
    }

    getCurrentProject(): string {
        return this.currentProject;
    }

    getName(): string {
        return this.name;
    }
}

interface ILocation {
    addPerson(person: Person): void;
    getPerson(index: number): Person;
    getCount(): number;
    getCity(): string;
    setCity(city: string): void;
}

class LocationC implements ILocation {
    private city: string;
    private persons: Person[] = [];

    constructor(city: string){
        this.city = city;
    }

    setCity(city: string): void {
        this.city = city;
    }

    getPersons(): Person[] {
        return this.persons;
    }

    getCity(): string {
        return this.city;
    }

    addPerson(person: Person): void {
        this.persons.push(person);
    }

    getPerson(index: number): Person {
        return this.persons[index];
    }

    getCount(): number {
        return this.persons.length;
    }
}

class Company<T extends LocationC> {
    private location: T;

    constructor(type: { new (name: string): T }, city: string){
        this.location = new type(city);
    }

    add(employee: Employee){
        this.location.addPerson(employee);
    }

    getProjectList(): string[]{
        return this.location.getPersons().map(employee => employee.getCurrentProject());
    }

    getNameList(): string[]{
        return this.location.getPersons().map(employee => employee.getName());
    }
}

class CompanyLocationArray implements ILocation {
    private city: string;
    private persons: Person[] = [];

    constructor(city: string){
        this.city = city;
    }

    setCity(city: string): void {
        this.city = city;
    }

    getCity(): string {
        return this.city;
    }

    addPerson(person: Person): void {
        this.persons.push(person);
    }

    getPerson(index: number): Person {
        return this.persons[index];
    }

    getCount(): number {
        return this.persons.length;
    }

    getProjectList(): string[]{
        return this.persons.map(employee => employee.getCurrentProject());
    }

    getNameList(): string[]{
        return this.persons.map(employee => employee.getName());
    }
}

class CompanyLocationLocalStorage implements ILocation {
    private city: string;
    private storageKey = "companyLocationLocalStorage";

    constructor(city: string) {
        this.city = city;
    }

    addPerson(person: Person): void {
        const storedArrayString = localStorage.getItem(this.storageKey);
        
        if(storedArrayString){
            const storedArray = JSON.parse(storedArrayString);
            storedArray.push(person);
            localStorage.setItem(this.storageKey, JSON.stringify(storedArray));
        }else{
            const persons = [person];
            localStorage.setItem(this.storageKey, JSON.stringify(persons));
        }
    }
    getPerson(index: number): Person {
        const storedArrayString = localStorage.getItem(this.storageKey);
        let person = null;

        if(storedArrayString){
            const storedArray = JSON.parse(storedArrayString);
            person = storedArray[index];
        }

        return person;
    }
    getCount(): number {
        const storedArrayString = localStorage.getItem(this.storageKey);
        const count = storedArrayString ? JSON.parse(storedArrayString).length : 0;
        return count;
    }
    getCity(): string {
        return this.city;
    }
    setCity(city: string): void {
        this.city = city;
    }

    getProjectList(): string[]{
        const storedArrayString = localStorage.getItem(this.storageKey);
        let result: string[] = [];

        if(storedArrayString){
            const storedArray = JSON.parse(storedArrayString);
            const employeeArray: Employee[] = storedArray.map((obj: { name: string; currentProject: string; }) => new Employee(obj.name, obj.currentProject));
            result = employeeArray.map(employee => employee.getCurrentProject());
        }

        return result;
    }

    getNameList(): string[]{
        const storedArrayString = localStorage.getItem(this.storageKey);
        let result: string[] = [];
        
        if(storedArrayString){
            const storedArray = JSON.parse(storedArrayString);
            const employeeArray: Employee[] = storedArray.map((obj: { name: string; currentProject: string; }) => new Employee(obj.name, obj.currentProject));
            result = employeeArray.map(employee => employee.getName());
        }

        return result;
    }
}

console.log("British Company");

const company1 = new Company<LocationC>(LocationC, "City1");
const company2 = new CompanyLocationArray("City2");
const company3 = new CompanyLocationLocalStorage("City3");

const employee1 = new Employee("Employee1", "Project1");
const employee2 = new Employee("Employee2", "Project2");
const employee3 = new Employee("Employee3", "Project3");
const employee4 = new Employee("Employee4", "Project4");
const employee5 = new Employee("Employee5", "Project5");
const employee6 = new Employee("Employee6", "Project6");

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
