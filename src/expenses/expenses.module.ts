import { Module } from '@nestjs/common';
import ExpensesController from './expenses.controller';
import ExpensesService from './expenses.service';
import { expenseProviders } from './models/expenses.providers';
import DBModule from 'src/db/db.module';

@Module({
  imports: [DBModule],
  controllers: [ExpensesController],
  providers: [...expenseProviders, ExpensesService],
  exports: [],
})
export class ExpensesModule {}
