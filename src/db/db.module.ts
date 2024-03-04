import { Module } from '@nestjs/common';
import dbProvider from './db.provider';

@Module({
  providers: [...dbProvider],
  exports: [...dbProvider],
})
class DBModule {}

export default DBModule;
