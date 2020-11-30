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
    rooms: Room[] = [];

    constructor(name: string | number) {
        super();
        this.name = name;
    }
}