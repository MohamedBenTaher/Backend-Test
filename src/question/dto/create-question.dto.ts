import { Survey } from 'src/survey/entities/survey.entity';
import { ManyToOne, CreateDateColumn } from 'typeorm';

export class CreateQuestionDto {
  public questionText: string;
  public choice1: string;

  public choice2: string;

  public choice3: string;

  public choice4: string;
  public answer: string;
  @ManyToOne((type) => Survey, (Survey) => Survey.questions) Survey: Survey;
  @CreateDateColumn()
  public createdAt;
}
