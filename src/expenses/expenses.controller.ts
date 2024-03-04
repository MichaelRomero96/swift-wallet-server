import { Body, Controller, Post } from '@nestjs/common';
import ExpensesService from './expenses.service';
import { CreateExpenseDto } from './expenses.dto';

@Controller('expenses')
class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Post()
  async create(@Body() newExpense: CreateExpenseDto) {
    return this.expensesService.create(newExpense);
  }
}

export default ExpensesController;
