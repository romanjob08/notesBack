import {Injectable} from "@nestjs/common";

export interface Note {
    id: string
    name: string
    created: string
    category: string
    content: string
    dates: string
    active: boolean
}

@Injectable()
export class NotesRepository {
    private notes: Note[] = [
        {
            id: "1",
            name: 'Shopping list',
            created: 'April 20,2021',
            category: "Task",
            content: 'Tomatoes, bread',
            active: true,
            dates: ''
        },
        {
            id: "2",
            name: 'The theory of evolution',
            created: 'April 27,2021',
            category: "Random Thought",
            content: 'Human evolution',
            active: true,
            dates: ''
        },
        {
            id: "3",
            name: 'New Feature',
            created: 'May 05,2021',
            category: "Idea",
            content: 'I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021',
            active: true,
            dates: '3/5/2021, 5/5/2021'
        },
        {
            id: "4",
            name: "William Gabbi's",
            created: 'May 07,2021',
            category: "Task",
            content: 'Power doesn\'t exist',
            active: true,
            dates: ''
        },
        {
            id: "5",
            name: 'Books',
            created: 'May 15,2021',
            category: "Task",
            content: 'The Lean Startup',
            active: true,
            dates: ''
        },
        {
            id: "6",
            name: 'Build',
            created: 'April 15,2021',
            category: "Idea",
            content: 'Build a warehouse for firewood',
            active: false,
            dates: ''
        },
        {
            id: "7",
            name: 'Books',
            created: 'May 15,2021',
            category: "Task",
            content: 'The Lean Startup',
            active: false,
            dates: ''
        },
    ]

    getAllNotes() {
        return this.notes;
    }

    getNoteById(id: string): Note {
        const index = this.notes.findIndex(item => item.id === id)
        if (index >= 0) {
            return this.notes[index]
        }
    }

    addNote(item: Note): Note {
        this.notes.push(item)
        return item;
    }

    editNote(index: number, editNote: Note): Note {
        this.notes[index] = editNote
        return this.notes[index]
    }

    archiver(index: number, editNote: Note): Note {
        this.notes[index] = editNote
        return this.notes[index]
    }

    deleteNote(index: number): Note[] {
        this.notes.splice(index, 1)
        return this.notes
    }
}