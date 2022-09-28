type Category = 'Idea' | 'Random Thought' | 'Task'

export class CreateNoteDto {
    readonly name: string
    readonly category: Category
    readonly content: string
}
