import {Teacher} from '../../entities/Teacher'
import {Student} from "../../entities/Student";
import {Promotion} from "../../entities/Promotion";
import {Course} from "../../entities/Course";
import {CoursesResolver} from "../../resolvers/Courses";
import {TeacherResolver} from "../../resolvers/Teacher";
import {generateTeachers} from "./Teacher";
import {generatePromotions} from "./Promotion";
import {createConnection, Connection, getMongoManager} from "typeorm";
import {buildSchema} from "type-graphql";
import Express from "express";
import {ApolloServer} from "apollo-server-express";
import {VirtualSchool} from "../../entities/VirtualSchool";
import {VirtualSchoolResolver} from "../../resolvers/VirtualSchool";
import {Room} from "../../entities/Room";
import {Floor} from "../../entities/Floor";
import {GraphQLSchema} from "graphql";
import {mongoose} from "@typegoose/typegoose";


export async function createSchool(
    schoolName: string,
    nbTeachers: number,
    nbPromotions: number,
    nbStudentsPerPromotion: number
): Promise<void> {
    // create BDD with schoolName

    // const connexion: Connection = await createConnection({
    //     type: 'mongodb',
    //     url: `mongodb://127.0.0.1:27017/${schoolName}`,
    //     useUnifiedTopology: true,
    //     entities: [Teacher, Course, Student, Promotion, VirtualSchool, Room, FloorStyle]
    // });

    const connexion: Connection = await createConnection({
        type: 'mongodb',
        url: `mongodb://127.0.0.1:27017/${schoolName}`,
        useUnifiedTopology: true,
        entities: [Teacher, Course, Student, Promotion, VirtualSchool, Floor, Room]
    });

    const schema: GraphQLSchema = await buildSchema({
        resolvers: [
            TeacherResolver,
            CoursesResolver,
            VirtualSchoolResolver
        ]})

    const app = Express()
    const apolloServer = new ApolloServer({schema})
    apolloServer.applyMiddleware({app});
    app.listen(4300, () => {
        console.log('server started', schoolName + ' DB created');
    })

    // create Virtual School ?
    // FloorStyle 000 -> staff : rooms 001, 002, 003 ... -> meeting room, etc
    // FloorStyle 100 -> 1st grade : classrooms 101, 102 ...
    // FloorStyle 200 -> 2nd grade : classrooms 201, 202 ...
    // ...
    const manager = getMongoManager()
    const school = await manager.save(new VirtualSchool(schoolName))

    // create nbTeachers
    await generateTeachers(nbTeachers, school._id)

    // create nbPromotion
    await generatePromotions(nbPromotions, nbStudentsPerPromotion, school._id)
}