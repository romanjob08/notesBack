import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {NotesService} from '../services';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateNoteDto} from "../dto";
import {Resp} from "../../classes";

@ApiTags('Notes')
@Controller('notes')
export class NotesController {
    constructor(private readonly notesService: NotesService) {
    }

    @ApiOperation({summary: 'get all notes'})
    @ApiResponse({status: 200})
    @Get()
    getAllNotes() {
        const data = this.notesService.getAllNotes();
        return new Resp(data, 200);
    }

    @ApiOperation({summary: 'Get notes Status'})
    @ApiResponse({status: 200})
    @Get('/status')
    getNotesStatus() {
        const data = this.notesService.getStatus()
        return new Resp(data, 200);
    }

    @ApiOperation({summary: 'Get note'})
    @ApiResponse({status: 200})
    @Get(':id')
    getNote(@Param('id') id: string) {
        const data = this.notesService.getNote(id)
        return new Resp(data, 200);
    }

    @ApiOperation({summary: 'Create note'})
    @ApiResponse({status: 201})
    @Post()
    createNote(@Body() createNoteDto: CreateNoteDto) {
        const data = this.notesService.createNote(createNoteDto)
        return new Resp(data, 201);
    }

    @ApiOperation({summary: 'Redact note'})
    @ApiResponse({status: 200})
    @Patch(':id')
    editNote(@Param('id') id: string, @Body() createNoteDto: CreateNoteDto): Resp {
        const data = this.notesService.editNote(id, createNoteDto)
        return new Resp(data, 200);
    }

    @ApiOperation({summary: 'Delete note'})
    @ApiResponse({status: 200})
    @Delete(':id')
    deleteNote(@Param('id') id: string) {
        const data = this.notesService.deleteNote(id)
        return new Resp(data, 200);
    }
}
