import { Question } from 'src/question/entities/question.entity';
import { OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class CreateSurveyDto {
  public id: number;

  public SurveyName: string;

  public SurveySubject: string;

  @OneToMany((type) => Question, (Question) => Question.Survey)
  questions: Question[];

  @CreateDateColumn()
  public createdAt;

  @UpdateDateColumn()
  public updatedAt;
}
