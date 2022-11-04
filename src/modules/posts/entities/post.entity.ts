import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({
    type: 'varchar',
    length: 100,
  })
  title: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}
