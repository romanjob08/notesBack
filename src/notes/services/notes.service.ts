import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {Note, NotesRepository} from "../repositories/notes.repository";

import {CreateNoteDto} from "../dto/create-note.dto";
import {StateCalculation} from "../../helpers/stateCalculation";
import {getDateFromText} from "../../helpers/getDateFromText";
import {getSpecialData} from "../../helpers/getSpecialData";
import {getId} from "../../helpers/getId";

@Injectable()
export class NotesService {
    constructor(private readonly notes: NotesRepository) {
    }

    getAllNotes() {
        return this.notes.getAllNotes();
    }

    getStatus() {
        return StateCalculation(this.notes.getAllNotes());
    }

    getNote(id: string): Note {
        if (this.notes.getNoteById(id)) {
            return this.notes.getNoteById(id);
        }
        throw new HttpException('Id not found', HttpStatus.BAD_REQUEST)
    }

    createNote(parameters: CreateNoteDto): Note {
        return this.notes.addNote(
            {
                id: getId().toString(),
                name: parameters.name,
                created: getSpecialData(),
                category: parameters.category,
                content: parameters.content,
                dates: getDateFromText(parameters.content),
                active: true
            }
        )
    }

    editNote(id: string, parameters: CreateNoteDto): Note {
        const notes = this.notes.getAllNotes()
        const index = notes.findIndex(item => item.id === id)
        if (index < 0) {
            throw new HttpException('Id not found', HttpStatus.BAD_REQUEST)
        }
        return this.notes.editNote(index, {
            id: notes[index].id,
            name: parameters.name,
            created: getSpecialData(),
            category: parameters.category,
            content: parameters.content,
            dates: getDateFromText(parameters.content),
            active: true
        })
    }

    deleteNote(id: string): Note[] | string {
        const index = this.notes.getAllNotes().findIndex(item => item.id === id);
        if (index < 0) {
            throw new HttpException('Id not found', HttpStatus.BAD_REQUEST)
        }
        return this.notes.deleteNote(index)
    }
}
