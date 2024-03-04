import { Repository } from 'typeorm';
import { Expense } from './models/expenses.entity';
import { CreateExpenseDto } from './expenses.dto';
import { Inject, Injectable } from '@nestjs/common';
import { EXPENSES_REPOSITORY } from './constants';

@Injectable()
class ExpensesService {
  constructor(
    @Inject(EXPENSES_REPOSITORY) private expenseRepository: Repository<Expense>,
  ) {}

  async create(expense: CreateExpenseDto) {
    const newExpense = this.expenseRepository.create(expense);
    return this.expenseRepository.save(newExpense);
  }
}

export default ExpensesService;
