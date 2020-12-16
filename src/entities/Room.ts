import {ID, Field, ObjectType, InputType} from "type-graphql";
import {Entity, ObjectIdColumn, Column, BaseEntity} from "typeorm";
import {ObjectID} from "mongodb";

@ObjectType('RoomType')
@InputType('RoomInput')
@Entity()
export class Room extends BaseEntity {
    @Field(() => ID)
    @ObjectIdColumn()
    _id!: ObjectID;

    @Field(() => ID)
    @ObjectIdColumn()
    floorId!: ObjectID;

    @Field()
    @Column()
    name!: number;

    @Field()
    @Column()
    url!: string;

    constructor(name: number, floorId: ObjectID) {
        super();
        this.name = name;
        this.floorId = floorId;
    }

    // function assignUrl()

    //
}