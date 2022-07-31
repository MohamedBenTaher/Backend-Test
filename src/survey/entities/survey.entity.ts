import { Question } from 'src/question/entities/question.entity';
import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('question')
export class Survey {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: false })
  public SurveyName: string;
  @Column({ nullable: false })
  public SurveySubject: string;

  //one to many with questions
  @OneToMany((type) => Question, (Question) => Question.Survey)
  questions: Question[];
  @CreateDateColumn()
  public createdAt;

  @UpdateDateColumn()
  public updatedAt;
}
