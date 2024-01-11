import { User } from '../../user/entities/user.entity';
import { Category } from '../../category/entities/category.entity';
export declare class Transaction {
    id: number;
    amount: number;
    title: number;
    type: string;
    category: Category;
    user: User;
    createdAt: Date;
    updatedAt: Date;
}
