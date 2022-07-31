import { Survey } from 'src/survey/entities/survey.entity';
import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity('question')
export class Question {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: false })
  public questionText: string;
  @Column({ nullable: false })
  public choice1: string;
  @Column({ nullable: false })
  public choice2: string;
  @Column({ nullable: false })
  public choice3: string;
  @Column({ nullable: false })
  public choice4: string;
  @Column({ nullable: false })
  public answer: string;
  //Many to one with test
  @ManyToOne((type) => Survey, (Survey) => Survey.questions) Survey: Survey;
  @CreateDateColumn()
  public createdAt;

  @UpdateDateColumn()
  public updatedAt;
}
