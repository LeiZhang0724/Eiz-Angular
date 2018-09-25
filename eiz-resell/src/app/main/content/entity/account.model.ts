
export class Account {

    id: number;
    name: string;
    email: string;

    constructor(account) {

        this.id = account ? account.sub : '';
        this.name = account ? account.name : '';
        this.email = account ? account.email : '';
    }
}
