import { DataSource } from 'typeorm';
import { Expense } from './expenses.entity';
import { EXPENSES_REPOSITORY } from '../constants';
import { DB_CONFIG } from 'src/shared/constants';

export const expensesProviders = [
  {
    provide: EXPENSES_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Expense),
    inject: [DB_CONFIG],
  },
];
