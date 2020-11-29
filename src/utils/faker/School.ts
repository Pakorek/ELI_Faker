import {Teacher} from '../../entities/Teacher'
import {Student} from "../../entities/Student";
import {Promotion} from "../../entities/Promotion";
import {Course} from "../../entities/Course";
import { CoursesResolver } from "../../resolvers/Courses";
import {TeacherResolver} from "../../resolvers/Teacher";
import { generateTeachers } from "./Teacher";
import {generatePromotions} from "./Promotion";
import {createConnection, Connection} from "typeorm";
import {buildSchema} from "type-graphql";
import Express from "express";
import {ApolloServer} from "apollo-server-express";


export async function createSchool(schoolName: string, nbTeachers: number, nbPromotions: number, nbStudentsPerPromotion: number) {
    // create BDD with schoolName
    const connexion: Connection = await createConnection({
        type: 'mongodb',
        url: `mongodb://127.0.0.1:27017/${schoolName}`,
        useUnifiedTopology: true,
        entities: [Teacher, Course, Student, Promotion]
    });
    const schema = await buildSchema({resolvers: [TeacherResolver, CoursesResolver]})
    const app = Express()
    const apolloServer = new ApolloServer({schema})
    apolloServer.applyMiddleware({app});
    app.listen(4300, () => {
        console.log('server started');
    })

    // create Virtual School ?
        // Floor 000 -> staff : rooms 001, 002, 003 ... -> meeting room, etc
        // Floor 100 -> 1st grade : classrooms 101, 102 ...
        // Floor 200 -> 2nd grade : classrooms 201, 202 ...
        // ...

    // create nbTeachers
    await generateTeachers(nbTeachers)

    // create nbPromotion
    await generatePromotions(nbPromotions, nbStudentsPerPromotion)
}