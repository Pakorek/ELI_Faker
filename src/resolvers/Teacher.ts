import {Teacher} from "../entities/Teacher";
import {Arg, Ctx, Mutation, Query, Resolver} from "type-graphql";
import {getMongoManager, MongoEntityManager} from "typeorm";
import { ObjectID } from 'mongodb'
import {Types} from "mongoose";
import {VirtualSchool} from "../entities/VirtualSchool";
import {Context} from "vm";
import {Course} from "../entities/Course";
import {Speciality} from "../entities/Speciality";

@Resolver(() => Teacher)
export class TeacherResolver {
    manager: MongoEntityManager = getMongoManager();

    @Query(() => [Teacher])
    public async getTeachers() {
        return this.manager.find(Teacher, {})
    }

    // contain
    @Query(() => [Teacher])
    public async getTeachersBySpeciality(@Arg('speciality') speciality: string) {
        return this.manager.find(Teacher, {
            where: {
                specialities: {$in: speciality},
            }
        })
    }

    // @Query(() => [Teacher])
    // public async getTeachersByPromotionId(
    //     @Ctx() { Promotion }: Context) {
    //     return this.manager.find(Teacher, {promotionId: Promotion._id})
    // }


    @Mutation(() => Boolean)
    public async createTeacher(
        @Arg('firstName') firstName: string,
        @Arg('lastName') lastName: string,
        //@Arg('speciality') speciality: Speciality[],
        @Arg('seniority') seniority: number,
        @Arg('classroom') classroom: string,
        // @Arg('schoolId') schoolId: ,
        @Ctx() { Speciality }: Context,
    ) {

        const teacher = new Teacher(firstName, lastName, [Speciality], seniority, classroom)
        return await this.manager.save(teacher)
    }

}