import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {NotesService} from "./services";
import {NotesRepository} from "./repositories";
import {NotesController} from "./routes";

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
