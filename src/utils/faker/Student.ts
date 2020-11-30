import { Student } from "../../entities/Student";
import {getMongoManager} from "typeorm";
import faker from 'faker';
import {Promotion} from "../../entities/Promotion";
import {ObjectID} from "mongodb";


export async function generateStudents(number: number, promotionId: ObjectID) {
    const manager = getMongoManager()
    let STUDENTS: ObjectID[] = []

    for (let i = 0; i < number; i++) {
        const lastName = faker.name.lastName()
        const firstName = faker.name.firstName()

        const student = new Student(firstName, lastName, promotionId)
        const saved = await manager.save(student)
        STUDENTS.push(saved._id)
    }

    return STUDENTS
}