import {ID, Field, ObjectType, InputType} from "type-graphql";
import {
    Entity,
    ObjectIdColumn,
    Column,
    BaseEntity,
    getMongoManager,
    MongoEntityManager, ManyToOne, OneToMany
} from "typeorm";
import {ObjectID} from "mongodb";
import { Floor } from "./Floor";

@ObjectType('VirtualSchoolType')
@InputType('VirtualSchoolInput')
@Entity()
export class VirtualSchool extends BaseEntity {
    @Field(() => ID)
    @ObjectIdColumn()
    _id!: ObjectID;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    nbFloors: number = 0;

    // @Field(() => ID)
    // @OneToMany(type => Teacher, { lazy: true })
    // schoolId: Lazy<VirtualSchool>;


    constructor(name: string) {
        super();
        this.name = name;
    }

    createFloor = async (): Promise<this> => {
        const manager: MongoEntityManager = getMongoManager();
        await manager.save(new Floor(this.nbFloors, this._id));
        return this
    }

    // getFloor

    // Floors

    // updateFloor
}