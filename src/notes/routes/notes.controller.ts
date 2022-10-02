import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateNoteDto } from "../dto";
import { NotesService } from "../services";
import { Note } from "../repositories";

@ApiTags('Notes')
@Controller("notes")
export class NotesController {

  constructor(private notesService: NotesService) {
  }

  @ApiOperation({ summary: "Get all notes" })
  @ApiResponse({ status: 200, type: [Note]})
  @Get()
  getAll() {
    return this.notesService.getAllNotes();
  }

  @ApiOperation({ summary: "Get all notes" })
  @ApiResponse({ status: 200})
  @Get('/stats')
  getStats() {
    return this.notesService.getStats();
  }

  @ApiOperation({ summary: "Get note" })
  @ApiResponse({ status: 200, type: [Note]})
  @Get(':id')
  getOneNote(@Param('id') id: number) {
    return this.notesService.getOneNote(id);
  }

  @ApiOperation({summary: 'Create note'})
  @ApiResponse({status: 201, type: Note})
  @Post()
  create(@Body() noteDto: CreateNoteDto) {
    return this.notesService.createNote(noteDto);
  }

  @ApiOperation({summary: 'Delete note'})
  @ApiResponse({status: 201, type: Note})
  @Delete(':id')
  deleteNote(@Param('id') id: number) {
    return this.notesService.deleteNote(id);
  }

  @ApiOperation({summary: 'Redact note'})
  @ApiResponse({status: 200, type: Note})
  @Patch(':id')
  editNote(@Param('id') id: number,@Body() noteDto: CreateNoteDto) {
      return this.notesService.editNote(id, noteDto)
  }

  @ApiOperation({summary: 'Archived or unarchived endpoint'})
  @ApiResponse({status: 200, type: Note})
  @Put(':id')
  archiver(@Param('id') id: number){
    return this.notesService.archiver(id)
  }
}
