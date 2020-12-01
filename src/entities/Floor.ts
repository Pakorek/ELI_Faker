import {ID, Field, ObjectType, InputType} from "type-graphql";
import {Entity, ObjectIdColumn, Column, BaseEntity} from "typeorm";
import {ObjectID} from "mongodb";
import { Room } from "./Room";

@ObjectType('PromotionType')
@InputType('PromotionInput')
@Entity()
export class Floor extends BaseEntity {
    @Field(() => ID)
    @ObjectIdColumn()
    _id!: ObjectID;

    @Field()
    @Column()
    name: string | number;

    @Field()
    @Column()
    schoolId: ObjectID;

    // useless -> Room.find(floorId = this.floorId)
    @Field()
    @Column()
    rooms: ObjectID[] = [];

    constructor(name: string | number, schoolId: ObjectID) {
        super();
        this.name = name;
        this.schoolId = schoolId;
    }

    // createRoom = async () => {
    //     const room = new Room()
    // }
}