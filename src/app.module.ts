import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpensesModule } from './expenses/expenses.module';
import DBModule from './db/db.module';

@Module({
  imports: [DBModule, ExpensesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
