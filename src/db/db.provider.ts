import { DB_CONFIG } from 'src/shared/constants';
import { DataSource } from 'typeorm';

const databaseProviders = [
  {
    provide: DB_CONFIG,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'michaelmysql',
        database: 'swiftWallet',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];

export default databaseProviders;
