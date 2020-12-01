import {ID, Field, ObjectType, InputType} from "type-graphql";
import {Entity, ObjectIdColumn, Column, BaseEntity, MongoEntityManager, getMongoManager} from "typeorm";
import {ObjectID} from "mongodb";
import { Room } from "./Room";

@ObjectType('FloorType')
@InputType('FLoorInput')
@Entity()
export class Floor extends BaseEntity {
    @Field(() => ID)
    @ObjectIdColumn()
    _id!: ObjectID;

    @Field()
    @Column()
    schoolId: ObjectID;

    @Field()
    @Column()
    name: string | number;

    @Field()
    @Column()
    nbRooms: number = 0;

    @Field()
    @Column()
    manager: MongoEntityManager = getMongoManager();

    constructor(name: string | number, schoolId: ObjectID) {
        super();
        this.name = name;
        this.schoolId = schoolId;
    }

    createRoom = async (): Promise<void> => {
        // assign url in constructor
        await this.manager.save(new Room(this.nbRooms, this._id))
    }

    // getRoom

    // updateRoom( name | url )

    // destroyLastRoom
}