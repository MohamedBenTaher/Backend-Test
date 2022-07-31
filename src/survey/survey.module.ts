/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { SurveyController } from './survey.controller';
import { Survey } from './entities/survey.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionModule } from 'src/question/question.module';

@Module({
  imports: [TypeOrmModule.forFeature([Survey]),QuestionModule],
  controllers: [SurveyController],
  providers: [SurveyService],

})
export class SurveyModule {}
