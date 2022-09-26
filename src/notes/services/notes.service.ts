import {Injectable, Patch} from '@nestjs/common';

@Injectable()
export class NotesService {

  getAllNotes(): string {
    return 'All notes';
  }

  createNote(): string {
    return 'Create new note'
  }

  getStatus(): string {
    return 'Notes Status';
  }


  getNote(): string {
    return 'Note with some id';
  }

  editNote(): string {
    return 'Redact some note'
  }

  deleteNote(): string {
    return 'Delete some note'
  }
}
