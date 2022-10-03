import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Note } from "../models";
import { CreateNoteDto } from "../../dto";

@Injectable()
export class NotesRepository {

  constructor(@InjectModel(Note) private notesModel: typeof Note) {
  }

  async getAllNotes(): Promise<Note[]> {
    return await this.notesModel.findAll()
  }

  async getNoteById(id: number): Promise<Note> {
    return await this.notesModel.findOne({ where: { id } })
  }

  async createNote(dto: CreateNoteDto, dates: string): Promise<Note> {
    const note = await this.notesModel.create(dto);
    note.dates = dates;
    await note.save();
    return note
  }

  async deleteNoteById(id: number): Promise<Note> {
    const note =  await this.notesModel.findOne({ where: { id } })
    await this.notesModel.destroy({where:{id}})
    return
  }

  async editNoteById(id: number, dto: CreateNoteDto, dates): Promise<Note> {
    const note = await this.notesModel.findByPk(id)
    note.name = dto.name
    note.category = dto.category
    note.content = dto.content
    note.dates = dates
    await note.save()
    return note
  }

  async archiverById(id: number) : Promise<Note> {
    const note = await this.notesModel.findByPk(id)
    note.active = !note.active
    await note.save()
    return note
  }
}