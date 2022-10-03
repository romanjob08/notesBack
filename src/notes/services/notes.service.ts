import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { Note, NotesRepository } from "../data";
import { CreateNoteDto } from "../dto";
import { getDateFromText, StateCalculation } from "../../helpers";

@Injectable()
export class NotesService {

  constructor(@Inject(NotesRepository) private notesRepository: NotesRepository) {
  }

  getAll(): Promise<Note[]> {
    return this.notesRepository.getAllNotes();
  }

  async getStats() {
    const notes = this.notesRepository.getAllNotes();
    return StateCalculation(await notes);
  }

  async getOneNote(id: number): Promise<Note> {
    const note = await this.notesRepository.getNoteById(id);
    if (!note) {
      throw new HttpException("Note not found", HttpStatus.NOT_FOUND);
    }
    return note;
  }

  createNote(dto: CreateNoteDto): Promise<Note> {
    return this.notesRepository.createNote(dto, getDateFromText(dto.content));
  }

  async deleteNote(id: number): Promise<Note> {
    const note =  await this.notesRepository.getNoteById(id)
    if(!note) {
      throw new HttpException('Note not found', HttpStatus.NOT_FOUND)
    }
    await this.notesRepository.deleteNoteById(id)
    return note
  }

  async editNote(id: number, dto: CreateNoteDto): Promise<Note> {
    const note = await this.notesRepository.getNoteById(id)
    if(!note) {
      throw new HttpException('Note not found', HttpStatus.NOT_FOUND)
    }
    return this.notesRepository.editNoteById(id, dto, getDateFromText(dto.content))
  }

  async archiver(id: number) : Promise<Note> {
    const note = await this.notesRepository.getNoteById(id)
    if(!note) {
      throw new HttpException('Note not found', HttpStatus.NOT_FOUND)
    }
    return this.notesRepository.archiverById(id)
  }
}
