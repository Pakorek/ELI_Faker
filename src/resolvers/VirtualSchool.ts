import {VirtualSchool} from "../entities/VirtualSchool";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import {getMongoManager, getRepository, MongoEntityManager} from "typeorm";
import {Floor} from "../entities/Floor";
import {Teacher} from "../entities/Teacher";
import {Promotion} from "../entities/Promotion";

@Resolver(() => VirtualSchool)
export class VirtualSchoolResolver {
    manager: MongoEntityManager = getMongoManager();

    @Query(() => [VirtualSchool])
    public async getSchool() {
        return this.manager.find(VirtualSchool, {})
    }

    // then with schoolId
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

    @Mutation(() => VirtualSchool)
    public async createFloor(@Arg('input') input: string) {
        const SchoolRepo = getRepository(VirtualSchool);
        const schools = await this.manager.find(VirtualSchool, {})
        const school: VirtualSchool = schools[0]
        await school.createFloor();
        school.nbFloors++
        return await this.manager.save(school);
    }
}