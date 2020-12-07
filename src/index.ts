import 'reflect-metadata';
import {ApolloServer} from 'apollo-server-express';
import Express from 'express';
import {buildSchema} from 'type-graphql';
import {createConnection, Connection, getMongoManager} from "typeorm";
import {VirtualSchoolResolver} from "./resolvers/VirtualSchool";
import {TeacherResolver} from './resolvers/Teacher';
import {CoursesResolver} from "./resolvers/Courses";
import {VirtualSchool} from "./entities/VirtualSchool";
import {Teacher} from "./entities/Teacher";
import {Course} from "./entities/Course";
import {Student} from "./entities/Student";
import {Promotion} from "./entities/Promotion";

import {createSchool} from "./utils/faker/School";
import {graphqlExpress} from "apollo-server-express/dist/expressApollo";
import {Floor} from "./entities/Floor";
import {Room} from "./entities/Room";

// Create Database with n Teachers, n Promotions and n Students
// createSchool("ELI", 5, 2, 8).catch(err => console.log(err))

const startServer = async () => {
    const connexion: Connection = await createConnection({
        type: 'mongodb',
        url: 'mongodb://127.0.0.1:27017/ELI',
        useUnifiedTopology: true,
        entities: [Teacher, Course, Student, Promotion, VirtualSchool, Floor, Room]
    });

    const schema = await buildSchema({
        resolvers: [
            TeacherResolver,
            CoursesResolver,
            VirtualSchoolResolver
        ]
    })

    const app = Express()
    const server = new ApolloServer({schema}) //4

    server.applyMiddleware({app}); // 5

    app.listen(4300, () => {
        console.log('server started');
    })
}
startServer()
