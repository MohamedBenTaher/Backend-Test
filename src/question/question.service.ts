import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Survey } from 'src/survey/entities/survey.entity';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { AnswerQuestionDto } from './dto/question-answer.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Question } from './entities/question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}
  create(createQuestionDto: CreateQuestionDto) {
    return this.questionRepository.save(
      this.questionRepository.create(createQuestionDto),
    );
  }

  async findAll() {
    return await this.questionRepository.find();
  }

  async findOne(id: number) {
    const question = await this.questionRepository.findOne({
      id: id,
    });
    return question;
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return this.questionRepository.save(
      this.questionRepository.create({
        id,
        ...updateQuestionDto,
      }),
    );
  }

  async remove(id: number) {
    return await this.questionRepository.delete(id);
  }
  async correctQuestion(response: AnswerQuestionDto) {
    const { id, answer } = response;
    const isCorrect = this.questionRepository.findOne({
      id: id,
      answer: answer,
    });
    if (isCorrect) return true;
    return false;
  }
}
