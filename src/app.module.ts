import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import { NotesController } from './notes/routes/notes.controller';
import { NotesService } from './notes/services/notes.service';

@Module({
  providers: [NotesService],
  controllers: [NotesController],
  imports: [
      ConfigModule.forRoot({
          envFilePath: `.${process.env.NODE_ENV}.env`
      })
  ],
})

export class AppModule {}
