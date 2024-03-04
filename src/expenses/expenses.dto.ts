import { ExpenseType } from './types/expense';

export class CreateExpenseDto {
  readonly name: string;
  readonly amount: number;
  readonly date: Date;
  readonly type: ExpenseType;
  readonly description: string;
}
