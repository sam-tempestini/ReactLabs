'use strict'


class Person{
    constructor(first, last){
        this.firstName = first;
        this.lastName = last;
    }
    display(){
        return `${this.firstName} ${this.lastName}`;
    }
}

class Employee extends Person{
    constructor(first, last, rate, title){
        super(first, last);
        this.rate = rate;
        this.title = title;
    }
    getGross(hrs){
        return (hrs * this.rate).toFixed(2);
    }

    display(){
        return `${this.firstName} ${this.lastName} - ${this.title}`;
    }

}

const employees = [
    new Employee('Erica', 'Simpson', 20, 'Manager'),
    new Employee('Stanley', 'David', 15, 'Shipper'),
    new Employee('Ryan', 'Grant', 10, 'Tech Support'),

];

employees.forEach( (e) => {
    console.log(e.display());
    console.log(e.getGross(40));
    console.log('');
})