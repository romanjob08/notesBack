import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Note } from "../repositories";
import { CreateNoteDto } from "../dto";
import { getDateFromText } from "../../helpers";
import { StateCalculation } from "../../helpers";

@Injectable()
export class NotesService {

  constructor(@InjectModel(Note) private noteRepository: typeof Note) {
  }

  async getAllNotes(): Promise<Note[]> {
    return await this.noteRepository.findAll()
  }

  async getOneNote(id: number): Promise<Note> {
    const note = await this.noteRepository.findOne({ where: { id } })
    console.log()
    if(!note) {
      throw new HttpException('Note not found', HttpStatus.NOT_FOUND)
    }
    return note
  }

  async getStats(): Promise<{}> {
    const notes = await this.noteRepository.findAll()
    StateCalculation(notes)
    return StateCalculation(notes)
  }

  async createNote(dto: CreateNoteDto): Promise<Note> {
    const note = await this.noteRepository.create(dto);
    note.dates = getDateFromText(dto.content);
    await note.save();
    return note
  }

  async deleteNote(id: number): Promise<Note> {
    const note =  await this.noteRepository.findOne({ where: { id } })
    if(!note) {
      throw new HttpException('Note not found', HttpStatus.NOT_FOUND)
    }
    await this.noteRepository.destroy({where:{id}})
    return note
  }

  async editNote(id: number, dto: CreateNoteDto): Promise<Note> {
    const note = await this.noteRepository.findByPk(id)
    if(!note) {
      throw new HttpException('Note not found', HttpStatus.NOT_FOUND)
    }
    note.name = dto.name
    note.category = dto.category
    note.content = dto.content
    note.dates = getDateFromText(dto.content)
    await note.save()
    return note
  }

  async archiver(id: number) : Promise<Note> {
    const note = await this.noteRepository.findByPk(id)
    if(!note) {
      throw new HttpException('Note not found', HttpStatus.NOT_FOUND)
    }
    note.active = !note.active
    await note.save()
    return note
  }
}
