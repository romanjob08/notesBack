import {Module} from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {NotesModule} from "./notes/notes.module";

@Module({
  providers: [],
  controllers: [],
  imports: [
      NotesModule,
      ConfigModule.forRoot({
          envFilePath: `.${process.env.NODE_ENV}.env`
      })
  ],
})
export class AppModule {}
