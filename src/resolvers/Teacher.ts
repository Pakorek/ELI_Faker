import {Teacher} from "../entities/Teacher";
import {getModelForClass} from "@typegoose/typegoose";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import {ObjectID} from "mongodb";
import {getMongoManager} from "typeorm";

@Resolver(() => Teacher)
export class TeacherResolver {
    @Query(() => [Teacher])
    public async getTeachers() {
        const TeacherModel = getModelForClass(Teacher);
        return TeacherModel.find().exec()
    }

    @Mutation(() => Teacher!)
    public async createTeacher(
        @Arg('firstName') firstName: string,
        @Arg('lastName') lastName: string,
        @Arg('speciality') speciality: string,
        @Arg('seniority') seniority: number,
        @Arg('classroom') classroom: string,
    ) {

        const manager = getMongoManager()
        const teacher = new Teacher(firstName, lastName, speciality, seniority, classroom)
        return await manager.save(teacher)
    }

}