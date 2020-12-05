import faker from 'faker';
import {Teacher} from '../../entities/Teacher'
import { CoursesResolver } from "../../resolvers/Courses";
import {getMongoManager} from "typeorm";
import {Course} from "../../entities/Course";
import {Promotion} from "../../entities/Promotion";
import {ObjectID} from "mongodb";


export async function generateCourse(promotionId: ObjectID, teacherId: ObjectID, number: number): Promise<void> {

    for (let i = 0; i < number; i++) {
        const title = faker.lorem.words()
        const content = faker.lorem.paragraphs()
        const record = faker.internet.url()

        const manager = getMongoManager()
        const course = new Course(title, content, teacherId, promotionId, record)
        await manager.save(course).catch(err => console.log(err))
    }
}

