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

    manager: MongoEntityManager = getMongoManager();

    // @Field(() => ID)
    // @OneToMany(type => Teacher, { lazy: true })
    // schoolId: Lazy<VirtualSchool>;


    constructor(name: string) {
        super();
        this.name = name;
        // create Floor 0 for staff
        this.createFloor()
    }

    createFloor = async (): Promise<void> => {
        await this.manager.save(new Floor(this.nbFloors, this._id));
        ++this.nbFloors;
    }

    // getFloor

    // getFloors Floor.find(schoolId = this.id)

    // updateFloor
}