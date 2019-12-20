export class User {
    id: number;
    name: string;
    desig: string;
    office: string;
    basic: number;

    constructor(User) {
        this.id = User.id;
        this.name = User.name;
        this.desig = User.desig;
        this.office = User.office;
        this.basic = User.basic;
    }
}

