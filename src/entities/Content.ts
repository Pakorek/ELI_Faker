import {ID, Field, InputType, ObjectType} from "type-graphql";
import {Entity, ObjectIdColumn, Column, BaseEntity} from "typeorm";
import {ObjectID} from "mongodb";


@ObjectType('ContentType')
export abstract class Content extends BaseEntity {
    @Field(() => ID)
    @ObjectIdColumn()
    _id!: ObjectID;

    @Field()
    @Column()
    title!: string;

    @Field()
    @Column()
    //subtitle!: string;

    @Field()
    @Column()
    content!: string;

    @Field()
    @Column()
    created_at!: Date;

    @Field(() => ID)
    @ObjectIdColumn()
    teacherId!: ObjectID;

    @Field(() => ID)
    @ObjectIdColumn()
    promotionId!: ObjectID;

}