import { User } from './User';

type Role = 'DIRECTOR' | 'SECRETARY' | 'TEACHER'; //...

export class Staff extends User {
    role!: Role;
}