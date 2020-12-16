import {Exercice} from "./Exercice";
import {Program} from "./Program";
import {ID, Field, InputType, ObjectType} from "type-graphql";
import {Entity, ObjectIdColumn, Column, BaseEntity} from "typeorm";
import {ObjectID} from "mongodb";


@ObjectType('CourseType')
@Entity()
export class Course extends BaseEntity {
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

    //created_at!: Date;

    @Field(() => ID)
    @ObjectIdColumn()
    teacherId!: ObjectID;

    @Field(() => ID)
    @ObjectIdColumn()
    promotionId!: ObjectID;

    //duration!: number;

    //exercices!: Exercice[]; // ObjectID[]

    //program!: Program;

    @Field()
    @Column()
    record!: string;

    constructor(title: string, content: string, teacherId: ObjectID, promotionId: ObjectID, record: string) {
        super();
        this.title = title;
        this.content = content;
        this.teacherId = teacherId;
        this.promotionId = promotionId;
        this.record = record;
    }

}