import {ID, Field, ObjectType, InputType} from "type-graphql";
import {Entity, ObjectIdColumn, Column, BaseEntity, getMongoManager, MongoEntityManager} from "typeorm";
import {ObjectID} from "mongodb";
import { Floor } from "./Floor";


@ObjectType('PromotionType')
@InputType('PromotionInput')
@Entity()
export class VirtualSchool extends BaseEntity {
    @Field(() => ID)
    @ObjectIdColumn()
    _id!: ObjectID;

    @Field(() => ID)
    @ObjectIdColumn()
    schoolId: ObjectID;

    // useless -> Floor.find(schoolId = this.id)
    // but maybe faster ?
    @Field()
    @Column()
    floors: ObjectID[] = [];

    @Field()
    @Column()
    nbFloors: number = 0;

    @Field()
    @Column()
    manager: MongoEntityManager = getMongoManager();

    constructor(schoolId: ObjectID) {
        super();
        this.schoolId = schoolId;
        // create Floor 0 for staff (no room yet)
        this.createFloor()
    }

    createFloor = async (): Promise<void> => {
        const floorNb = this.nbFloors;
        const floor = await this.manager.save(new Floor(floorNb, this._id));
        //this.floors.push(floor._id);
        ++this.nbFloors;
    }

    // getFloor

    // getFloors Floor.find(schoolId = this.id)
}