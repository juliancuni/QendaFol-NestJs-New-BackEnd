import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: console });
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api/v1');
  const port = parseInt(process.env.SERVER_PORT);

  const swaggerConfig = new DocumentBuilder()
    .setTitle("Qendra Fol Api")
    .setDescription("Api per administrimin e ceshtjeve penale")
    .setContact("Julian Çuni", "http://microservices.al", "julian.cuni@microservices.al")
    .setVersion("0.1.0")
    .addBearerAuth()
    .build();

  const doc = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup("swagger", app, doc);

  await app.listen(port);
}

bootstrap();
