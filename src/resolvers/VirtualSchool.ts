import {VirtualSchool} from "../entities/VirtualSchool";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import {getMongoManager, MongoEntityManager} from "typeorm";
import {Floor} from "../entities/Floor";
import {Teacher} from "../entities/Teacher";
import {Promotion} from "../entities/Promotion";

@Resolver(() => VirtualSchool)
export class VirtualSchoolResolver {
    manager: MongoEntityManager = getMongoManager();

    @Query(() => [Floor])
    public async getFloors() {
        return this.manager.find(Floor, {})
    }

    @Query(() => [Teacher])
    public async getTeachers() {
        return this.manager.find(Teacher, {})
    }

    @Query(() => [Promotion])
    public async getPromotions() {
        return this.manager.find(Promotion, {})
    }

    @Mutation(() => Boolean)
    public async createFloor() {
        const school = await this.manager.find(VirtualSchool, {})
        // return await this.manager.save(new Floor())
    }

}