import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('User')
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: false })
  public firstname: string;
  @Column({ nullable: false })
  public lastname: string;
  @Column({
    unique: true,
    nullable: false,
  })
  public username: string;

  @Column({
    nullable: false,
  })
  public password: string;

  @CreateDateColumn()
  public createdAt;

  @UpdateDateColumn()
  public updatedAt;
}
