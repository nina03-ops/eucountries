import { Module } from '@nestjs/common';
import{MongooseModule} from '@nestjs/mongoose';


import { CountriesModule } from './countries/countries.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CountriesModule, MongooseModule.forRoot('mongodb+srv://Nina:o0OVgZodDg7EtQ8J@cluster0.fx6ud.azure.mongodb.net/countriesnestjs?retryWrites=true&w=majority')],
  controllers: [AppController], //they handle incoming requests and they send back responses
  providers: [AppService],
})
export class AppModule {}
