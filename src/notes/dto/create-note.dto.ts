import { IsIn, IsString } from "class-validator";

export class CreateNoteDto {
  @IsString()
  readonly name: string;

  @IsIn(['Idea', 'Random Thought', 'Task'])
  readonly category: string

  @IsString()
  readonly content: string

  readonly dates?: string;
}