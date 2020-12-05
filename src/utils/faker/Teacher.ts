import faker from 'faker';
import { TeacherResolver } from "../../resolvers/Teacher";
import { generateCourse } from "./Course";
import {getMongoManager} from "typeorm";
import {Teacher} from "../../entities/Teacher";
import {ObjectID} from "mongodb";
import {VirtualSchool} from "../../entities/VirtualSchool";


// faker.locale = "fr";

const SPECIALITIES = ['Français', 'Mathématiques', 'Anglais', 'Histoire', 'Géographie']

export async function generateTeachers(number: number, schoolId: ObjectID): Promise<void> {
    const manager = getMongoManager()

    for (let i = 0; i < number; i++) {
        const lastName = faker.name.lastName()
        const firstName = faker.name.firstName()
        const speciality = SPECIALITIES[Math.floor(Math.random() * SPECIALITIES.length)]
        const seniority = Math.floor(Math.random() * 20)
        const classromm = faker.internet.url()

        const teacher = new Teacher(firstName, lastName, speciality, seniority, classromm, schoolId)
        await manager.save(teacher).catch(err => console.log(err))

        //await generateCourse(teacher, 2)
    }
}

