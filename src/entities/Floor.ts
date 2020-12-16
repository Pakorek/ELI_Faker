import {ID, Field, ObjectType, InputType} from "type-graphql";
import {Entity, ObjectIdColumn, Column, BaseEntity, MongoEntityManager, getMongoManager} from "typeorm";
import {ObjectID} from "mongodb";
import { Room } from "./Room";

@ObjectType('FloorType')
@InputType('FloorInput')
@Entity()
export class Floor extends BaseEntity {
    @Field(() => ID)
    @ObjectIdColumn()
    _id!: ObjectID;

    @Field(() => ID)
    @Column()
    schoolId: ObjectID;

    @Field()
    @Column()
    level: number;

    @Field()
    @Column()
    nbRooms: number = 0;

    constructor(level: number, schoolId: ObjectID) {
        super();
        this.level = level;
        this.schoolId = schoolId;
    }

    createRoom = async (): Promise<void> => {
        // assign url in constructor
        const manager: MongoEntityManager = getMongoManager();

        await manager.save(new Room(this.nbRooms, this._id))
        ++this.nbRooms
    }

    // getRoom

    // updateRoom( prop: name | url, value: string | number )

    // destroyRoom ?
}