import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Model} from "sequelize-typescript";


@Entity('notes')
export class Note extends Model<Note>{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    image: string

    @Column()
    name: string

    @Column()
    created: string

    @Column()
    category: string

    @Column()
    content: string

    @Column()
    active: boolean

    @Column()
    dates: string
}