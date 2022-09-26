import {Controller, Delete, Get, Patch, Post} from '@nestjs/common';
import {NotesService} from '../services/notes.service';

@Controller('notes')
export class NotesController {
    constructor(private readonly appService: NotesService) {
    }

    @Get()
    getAllNotes(): string {
        return this.appService.getAllNotes();
    }

    @Post()
    createNote(): string {
        return this.appService.createNote()
    }

    @Get('/status')
    getNotesStatus(): string {
        return this.appService.getStatus();
    }

    // @Get('/:id')
    @Get('/1')
    getNote(): string {
        return this.appService.getNote();
    }

    // @Patch('/:id')
    @Patch('/1')
    editNote(): string {
        return this.appService.editNote()
    }

    // @Delete('/:id')
    @Delete('/2')
    deleteNote(): string {
        return this.appService.deleteNote()
    }
}
