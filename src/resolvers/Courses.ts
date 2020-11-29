import { Course } from "../entities/Course";
import {getModelForClass} from "@typegoose/typegoose";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import {Types} from "mongoose";
import { ObjectID } from "mongodb";


@Resolver(() => Course)
export class CoursesResolver {
    // @Query(() => [Course])
    // public async getAllCourses() {
    //     const CourseModel = getModelForClass(Course);
    //     return CourseModel.find().exec()
    // }
    //
    //
    // @Query(() => [Course])
    // public async getCoursesByTeacherId(@Arg('teacherId', () => [Course]) teacherId: string) {
    //     const CourseModel = getModelForClass(Course);
    //     return CourseModel.find({ teacherId: teacherId }).exec()
    // }

    // @Mutation(() => Course!)
    // public async createCourse(
    //     @Arg('title') title: string,
    //     @Arg('content') content: string,
    //     @Arg('teacherId') teacherId: ObjectID,
    //     @Arg('url') url: string,
    // ) {
    //     const CourseModel = getModelForClass(Course);
    //
    //     return CourseModel.create({
    //         title,
    //         content,
    //         teacherId,
    //         url
    //     });
    // }
}