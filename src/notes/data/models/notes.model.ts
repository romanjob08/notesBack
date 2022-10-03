import {Column, DataType, Model, Table} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface NoteCreationAttrs {
  name: string;
  category: string;
  content: string;
}

@Table({tableName: 'notes'})
export class Note extends Model<Note, NoteCreationAttrs>{
  @ApiProperty({example: '1...', description: 'Unique identifier'})
  @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'Shopping list'})
  @Column({type: DataType.STRING, allowNull: false})
  name: string;

  @ApiProperty({example: 'Idea, Random Thought or Task', description: 'Yo mast to choose som category'})
  @Column({type: DataType.STRING, allowNull: false})
  category: string;

  @ApiProperty({example: 'Bread, milk, sausage', description: 'Add you content'})
  @Column({type: DataType.STRING, allowNull: false})
  content: string;

  @ApiProperty({example: '3/5/2021, 5/5/2021', description: 'Here will be the date from the content'})
  @Column({type: DataType.STRING})
  dates: string;

  @ApiProperty({example: 'Boolean', description: 'Label for archiving'})
  @Column({type: DataType.BOOLEAN, defaultValue: true})
  active: boolean;
}