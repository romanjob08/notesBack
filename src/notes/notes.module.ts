import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { NotesController } from "./routes";
import { NotesService } from "./services";
import { Note, NotesRepository } from "./data";

@Module({
  controllers: [NotesController],
  providers: [NotesService, NotesRepository],
  imports: [
    SequelizeModule.forFeature([Note])
  ]
})
export class NotesModule {}
