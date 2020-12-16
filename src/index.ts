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

import {createSchool} from "./utils/faker/School";
import {Evaluation} from "./entities/Evaluation";

// Create Database with n Teachers, n Promotions and n Students
// createSchool("ELI", 5, 2, 8).catch(err => console.log(err))

const startServer = async () => {
    const connexion: Connection = await createConnection({
        type: 'mongodb',
        url: 'mongodb://127.0.0.1:27017/ELI',
        useUnifiedTopology: true,
        entities: [Teacher, Course, Student, Promotion, Evaluation]
    });

    const schema = await buildSchema({
        resolvers: [
            TeacherResolver,
            CoursesResolver
        ]
    })

    const app = Express()
    const server = new ApolloServer({schema}) //4

    server.applyMiddleware({app}); // 5

    app.listen(4050, () => {
        console.log('server started');
    })
}
startServer()
