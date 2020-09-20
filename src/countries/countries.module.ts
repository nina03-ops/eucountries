import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';
import { Module } from '@nestjs/common';
import{ MongooseModule} from '@nestjs/mongoose';
import { CountrySchema } from './country.model';

@Module({
  imports: [MongooseModule.forFeature([{name:'Country', schema: CountrySchema }])],
  controllers: [CountriesController], //they handle incoming requests and they send back responses
  providers: [CountriesService],
})

export class CountriesModule {}
