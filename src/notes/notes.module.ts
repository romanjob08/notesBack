import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { NotesController } from "./routes";
import { NotesService } from "./services";
import { Note } from "./repositories";

@Module({
  controllers: [NotesController],
  providers: [NotesService],
  imports: [
    SequelizeModule.forFeature([Note])
  ]
})
export class NotesModule {}
