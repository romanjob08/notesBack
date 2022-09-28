import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {NotesService} from "./services/notes.service";
import {NotesRepository} from "./repositories/notes.repository";
import {NotesController} from "./routes/notes.controller";

@Module({
  providers: [NotesService, NotesRepository],
  controllers: [NotesController],
  imports: [
      ConfigModule.forRoot({
          envFilePath: `.${process.env.NODE_ENV}.env`
      })
  ],
})
export class NotesModule {}
