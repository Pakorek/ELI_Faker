import { Promotion } from "../../entities/Promotion";
import faker from 'faker'
import {getMongoManager} from "typeorm";
import {Teacher} from "../../entities/Teacher";
import {generateStudents} from "./Student";
import {generateCourse} from "./Course";


export async function generatePromotions(nbProms: number, nbStudentsPerProm: number) {

    // get all Teachers
    const manager = getMongoManager()
    const TEACHERS = await manager.find(Teacher, {})

    for (let i=0; i < nbProms; i++) {
        const title = faker.lorem.words()
        const promotion = new Promotion(title)

        // Take all Teachers for now
        promotion.teachers = TEACHERS;

        // save Promotion to get id later
        await manager.save(promotion)

        // Generate n Courses for each Teacher
        for (const teacher of Object.values(TEACHERS)) {
            await generateCourse(promotion._id, teacher, 1);
        }

        // generate nbStudents
        promotion.students = await generateStudents(nbStudentsPerProm, promotion._id)
        await manager.save(promotion)
    }
}