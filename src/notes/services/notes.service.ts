import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {Note, NotesRepository} from "../repositories";

import {CreateNoteDto} from "../dto";
import {StateCalculation} from "../../helpers";
import {getDateFromText} from "../../helpers";
import {getSpecialData} from "../../helpers";
import {getId} from "../../helpers";

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
        throw new HttpException('Item not found', HttpStatus.BAD_REQUEST)
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
            throw new HttpException('Item not found', HttpStatus.BAD_REQUEST)
        }
        return this.notes.editNote(index, {
            ...notes[index], name: parameters.name, category: parameters.category, content: parameters.content
        })
    }

    archiveNote(id: string): Note {
        const notes = this.notes.getAllNotes()
        const index = notes.findIndex(item => item.id === id)
        if (index < 0) {
            throw new HttpException('Item not found', HttpStatus.BAD_REQUEST)
        }
        return this.notes.archiver(index, {
            ...notes[index], active: false
        })
    }

    unArchiveNote(id: string): Note {
        const notes = this.notes.getAllNotes()
        const index = notes.findIndex(item => item.id === id)
        if (index < 0) {
            throw new HttpException('Item not found', HttpStatus.BAD_REQUEST)
        }
        return this.notes.archiver(index, {
            ...notes[index], active: true
        })
    }

    deleteNote(id: string): Note[] | string {
        const index = this.notes.getAllNotes().findIndex(item => item.id === id);
        if (index < 0) {
            throw new HttpException('Item not found', HttpStatus.BAD_REQUEST)
        }
        return this.notes.deleteNote(index)
    }
}
