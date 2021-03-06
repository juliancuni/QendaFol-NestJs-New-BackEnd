import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { json } from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: (process.env.NODE_ENV === 'development') ? ['debug'] : ['warn', 'error'],
  });
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api/v1');
  app.enableCors();
  app.use(json({limit: '1mb'}));
  const port = parseInt(process.env.SERVER_PORT);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Qendra Fol Api')
    .setDescription('Api per administrimin e ceshtjeve penale')
    .setContact(
      'Julian Çuni',
      'http://microservices.al',
      'julian.cuni@microservices.al',
    )
    .setVersion('0.1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      'access-token',
    )
    .build();

  const doc = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('swagger', app, doc);

  await app.listen(port);
}

bootstrap();
