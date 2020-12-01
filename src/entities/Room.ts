import {ID, Field, ObjectType, InputType} from "type-graphql";
import {Entity, ObjectIdColumn, Column, BaseEntity} from "typeorm";
import {ObjectID} from "mongodb";

@ObjectType('PromotionType')
@InputType('PromotionInput')
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
    name: string | number;

    @Field()
    @Column()
    url!: string;

    constructor(name: string | number, floorId: ObjectID) {
        super();
        this.name = name;
        this.floorId = floorId;
    }

    // function assignUrl()

    //
}