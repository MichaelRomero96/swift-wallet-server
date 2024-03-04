import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tags' })
class Tags {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  registryId: number;

  @Column()
  label: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    nullable: true,
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}

export default Tags;
