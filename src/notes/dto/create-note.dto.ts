import { IsIn, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateNoteDto {
  @ApiProperty({example:'William Gabbi\'s', description: 'There should be the name of some note'})
  @IsString()
  readonly name: string;

  @ApiProperty({example:'Idea', description: 'Here can by only: Idea | Random Thought | Task'})
  @IsIn(['Idea', 'Random Thought', 'Task'])
  readonly category: string

  @ApiProperty({example:'Power doesn\'t exist', description: 'This should be the body of your note'})
  @IsString()
  readonly content: string
}