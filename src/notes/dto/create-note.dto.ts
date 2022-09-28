import {IsIn, IsString} from "class-validator";

export class CreateNoteDto {
    @IsString()
    name: string;

    @IsIn(['Idea', 'Random Thought', 'Task'])
    category: string

    @IsString()
    content: string
}
