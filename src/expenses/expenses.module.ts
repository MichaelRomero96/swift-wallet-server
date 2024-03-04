import { Module } from '@nestjs/common';
import ExpensesController from './expenses.controller';
import ExpensesService from './expenses.service';
import { expensesProviders } from './models/expenses.providers';
import DBModule from 'src/db/db.module';

@Module({
  imports: [DBModule],
  controllers: [ExpensesController],
  providers: [...expensesProviders, ExpensesService],
  exports: [],
})
export class ExpensesModule {}
