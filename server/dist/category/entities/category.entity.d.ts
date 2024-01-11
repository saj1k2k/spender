import { User } from 'src/user/entities/user.entity';
import { Transaction } from 'src/transaction/entities/transaction.entity';
export declare class Category {
    id: number;
    title: string;
    transactions: Transaction[];
    user: User;
    createdAt: Date;
    updatedAt: Date;
}
