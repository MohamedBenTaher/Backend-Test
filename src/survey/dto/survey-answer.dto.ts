/* eslint-disable prettier/prettier */
import { AnswerQuestionDto } from 'src/question/dto/question-answer.dto';

export class SurveyAnswerDto {
  public id: number;
  public answers: AnswerQuestionDto[];
}
