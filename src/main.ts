import { NestFactory } from '@nestjs/core';
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";

async function start() {
  const PORT = process.env.PORT || 3000
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Backend for notes')
    .setDescription('Documentation for REST API')
    .setVersion('1.0.0')
    .addTag('NOTES BAC')
    .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document)

  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}
start();
