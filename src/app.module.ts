import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { UsersModule } from './modules/users/users.module';
import { PostsModule } from './modules/posts/posts.module';
import { ReportsModule } from './modules/reports/reports.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { LikesModule } from './modules/likes/likes.module';
import { TimelinesModule } from './modules/timelines/timelines.module';
import configurations from 'config/configurations';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [configurations],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('database.host'),
        port: +configService.get('database.port'),
        username: configService.get('database.username'),
        password: configService.get('database.password'),
        database: configService.get('database.database'),
        entities: [__dirname + './**/**/**/*.entity.{ts,js}'],
        autoLoadEntities: true,
        synchronize: false,
        retryDelay: 3000,
        retryAttempts: 10,
      }),
    }),
    UsersModule,
    // PostsModule,
    // ReportsModule,
    // CategoriesModule,
    // LikesModule,
    // TimelinesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
