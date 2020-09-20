//Use NestFactory to create an application instance and pass the required root module for the app-AppModule.
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//initialize Swagger using the SwaggerModule class
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //DocumentBuilder helps to structure a base document that conforms to the OpenAPI Specification. It provides several methods that allow setting such properties as title, description, version, etc. In order to create a full document (with all HTTP routes defined) we use the createDocument() method of the SwaggerModule class. This method takes two arguments, an application instance and a Swagger options object.
  const options = new DocumentBuilder()
  .setTitle('Countries ')
  .setDescription('The countries API description')
  .setVersion('1.0')
  .addTag('countries')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  // app.use(function(req, res, next) {
  //   res.header("Access-Control-Allow-Origin", "*");
  //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //  next();
  // });
  app.enableCors();


  await app.listen(3000);
}
bootstrap();
