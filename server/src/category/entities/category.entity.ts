import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  UpdateDateColumn,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Transaction } from 'src/transaction/entities/transaction.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn({ name: 'category_id' })
  id: number;
  @Column()
  title: string;
  @OneToMany(() => Transaction, (transaction) => transaction.category)
  transactions: Transaction[];
  @ManyToOne(() => User, (user) => user.categories)
  @JoinColumn({ name: 'user_id' })
  user: User;
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
