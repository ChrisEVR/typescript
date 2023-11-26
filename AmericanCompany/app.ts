interface IEmployee {
    setCurrentProject(currentProject: string): void;

    setName(name: string): void;

    getCurrentProject(): string;

    getName(): string;
}

class Company {
    employees: IEmployee[] = [];
    add(employee: IEmployee){
        this.employees.push(employee);
    }
    getProjectList(): string[]{
        return this.employees.map(employee => employee.getCurrentProject());
    }
    getNameList(): string[]{
        return this.employees.map(employee => employee.getName());
    }
}

class Frontend implements IEmployee {
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

class Backend implements IEmployee {
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

console.log("American Company");

const company = new Company();

const frontend1 = new Frontend("Frontend1", "Project1");
const frontend2 = new Frontend("Frontend2", "Project2");
const frontend3 = new Frontend("Frontend3", "Project3");

const backend1 = new Backend("Backend1", "Project1");
const backend2 = new Backend("Backend2", "Project2");
const backend3 = new Backend("Backend3", "Project3");

company.add(frontend1);
company.add(frontend2);
company.add(frontend3);
company.add(backend1);
company.add(backend2);
company.add(backend3);

console.log(company.getNameList());
console.log(company.getProjectList());