import {Teacher} from "../entities/Teacher";
import {Arg, Ctx, Mutation, Query, Resolver} from "type-graphql";
import {getMongoManager, MongoEntityManager} from "typeorm";
import { ObjectID } from 'mongodb'
import {Types} from "mongoose";
import {VirtualSchool} from "../entities/VirtualSchool";
import {Context} from "vm";

@Resolver(() => Teacher)
export class TeacherResolver {
    manager: MongoEntityManager = getMongoManager();

    @Query(() => [Teacher])
    public async getTeachers() {
        return this.manager.find(Teacher, {})
    }

    @Query(() => [Teacher])
    public async getTeachersBySpeciality(@Arg('speciality') speciality: string) {
        return this.manager.find(Teacher, {speciality: speciality})
    }

    @Mutation(() => Boolean)
    public async createTeacher(
        @Arg('firstName') firstName: string,
        @Arg('lastName') lastName: string,
        @Arg('speciality') speciality: string,
        @Arg('seniority') seniority: number,
        @Arg('classroom') classroom: string,
        // @Arg('schoolId') schoolId: ,
        @Ctx() { VirtualSchool }: Context,
    ) {

        const teacher = new Teacher(firstName, lastName, speciality, seniority, classroom, VirtualSchool._id)
        return await this.manager.save(teacher)
    }

}