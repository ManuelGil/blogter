import { ConfigModule } from '@nestjs/config';

ConfigModule.forRoot({
  envFilePath: '.env',
});

export const options = {
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(String(process.env.DATABASE_PORT), 10) || 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
  logging: process.env.DATABASE_LOGGING,
  retryAttempts: process.env.DATABASE_RETRY_ATTEMPTS,
  retryDelay: process.env.DATABASE_RETRY_DELAY,
  autoLoadEntities: true,
  synchronize: false,
  entities: [__dirname + '/../libs/database/src/lib/entities/**/*.entity.ts'],
  migrationsTableName: 'migrations',
  migrations: [__dirname + '/../libs/database/migrations/**/*.ts'],
};
