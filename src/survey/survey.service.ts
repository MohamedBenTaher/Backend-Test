import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { create } from 'domain';
import { AnswerQuestionDto } from 'src/question/dto/question-answer.dto';
import { Question } from 'src/question/entities/question.entity';
import { QuestionService } from 'src/question/question.service';
import { Repository } from 'typeorm';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { SurveyAnswerDto } from './dto/survey-answer.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { Survey } from './entities/survey.entity';

@Injectable()
export class SurveyService {
  constructor(
    @InjectRepository(Survey)
    private readonly surveyRepository: Repository<Survey>,
    private readonly QuestionService: QuestionService,
  ) {}
  create(createSurveyDto: CreateSurveyDto) {
    return this.surveyRepository.save(
      this.surveyRepository.create(createSurveyDto),
    );
  }

  async findAll() {
    return await this.surveyRepository.find();
  }

  async findOne(id: number) {
    const survey = await this.surveyRepository.findOne({
      id: id,
    });
    return survey;
  }

  async update(id: number, updateSurveyDto: UpdateSurveyDto) {
    return await this.surveyRepository.save(
      this.surveyRepository.create({
        id,
        ...updateSurveyDto,
      }),
    );
  }

  async correctSurvey(response: SurveyAnswerDto) {
    const { id, answers } = response;
    let grade = 0;
    const isExisting = await this.surveyRepository
      .findOne(id)
      .then(() => {
        answers.forEach((element) => {
          grade += this.QuestionService.correctQuestion(element) ? 3 : -1;
        });
        return grade;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async remove(id: number) {
    return await this.surveyRepository.delete(id);
  }
}
