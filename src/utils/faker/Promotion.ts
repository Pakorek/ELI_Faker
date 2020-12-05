import { Promotion } from "../../entities/Promotion";
import faker from 'faker'
import {getMongoManager} from "typeorm";
import {Teacher} from "../../entities/Teacher";
import {generateStudents} from "./Student";
import {generateCourse} from "./Course";
import {ObjectID} from "mongodb";



export async function generatePromotions(nbProms: number, nbStudentsPerProm: number, schoolId: ObjectID) {
    const manager = getMongoManager()

    // get all Teachers
    const TEACHERS = await manager.find(Teacher, {}).catch(err => console.log(err))

    if (TEACHERS) {
        for (let i=0; i < nbProms; i++) {
            const title = faker.lorem.words()
            const promotion = new Promotion(title, schoolId)

            // save Promotion to get id later
            const manager = getMongoManager()

            await manager.save(promotion).catch(err => console.log(err))

            if (promotion) {
                // Assign each teacher_id to prom & Generate n Courses for each Teacher
                for (const teacher of Object.values(TEACHERS)) {
                    promotion.teachers.push(teacher._id)
                    generateCourse(promotion._id, teacher._id, 1).catch(err => console.log(err));
                }

                // generate nbStudents
                const manager = getMongoManager()
                promotion.students = await generateStudents(nbStudentsPerProm, promotion._id)
                await manager.save(promotion).catch(err => console.log(err))
            }

        }

    }

}