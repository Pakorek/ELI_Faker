import 'reflect-metadata';
import {ApolloServer} from 'apollo-server-express';
import Express from 'express';
import {buildSchema} from 'type-graphql';
import {createConnection, Connection, getMongoManager} from "typeorm";
import {TeacherResolver} from './resolvers/Teacher';
import {CoursesResolver} from "./resolvers/Courses";
import {Teacher} from "./entities/Teacher";
import {Course} from "./entities/Course";
import {Student} from "./entities/Student";
import {Promotion} from "./entities/Promotion";
import { createSchool } from "./utils/faker/School";

// Create Database with n Teachers, n Promotions and n Students
createSchool("WCS3", 1, 3, 1)


// const startServer = async () => {
//     const connexion: Connection = await createConnection({
//         type: 'mongodb',
//         url: 'mongodb://127.0.0.1:27017/wilderdb',
//         useUnifiedTopology: true,
//         entities: [Teacher, Course, Student, Promotion]
//     });
//
//     const schema = await buildSchema({resolvers: [TeacherResolver, CoursesResolver]})
//
//     const app = Express()
//     const apolloServer = new ApolloServer({schema}) //4
//
//     apolloServer.applyMiddleware({app}); // 5
//
//     app.listen(4300, () => {
//         console.log('server started');
//     })
// }
// startServer()
