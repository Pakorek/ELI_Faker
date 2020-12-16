import { Course } from "../entities/Course";
import {Teacher} from "../entities/Teacher";
import {Promotion} from "../entities/Promotion";
import {getModelForClass} from "@typegoose/typegoose";
import {Arg, Ctx, Mutation, Query, Resolver} from "type-graphql";
import {Types} from "mongoose";
import { ObjectID } from "mongodb";
import {Context} from "vm";
import {getMongoManager, MongoEntityManager} from "typeorm";


@Resolver(() => Course)
export class CoursesResolver {
    manager: MongoEntityManager = getMongoManager();

    @Query(() => [Course])
    public async getAllCourses() {
        return this.manager.find(Course, {})
    }


    @Query(() => [Course])
    public async getCoursesByTeacherId(@Arg('teacherId', () => [Course]) teacherId: ObjectID) {
        return this.manager.find(Course, {teacherId: teacherId})
    }

    @Mutation(() => Course!)
    public async createCourse(
        @Arg('title') title: string,
        @Arg('content') content: string,
        @Ctx() { Teacher }: Context,
        @Ctx() { Promotion }: Context,
        @Arg('record') record: string,
    ) {
        const course = new Course(title, content, Teacher._id, Promotion._id, record)
        return await this.manager.save(course)
    }
}