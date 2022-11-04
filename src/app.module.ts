import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from './modules/users/users.module';
import { PostsModule } from './modules/posts/posts.module';
import { ReportsModule } from './modules/reports/reports.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { LikesModule } from './modules/likes/likes.module';
import { TimelinesModule } from './modules/timelines/timelines.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test_blogter',
      entities: [],
      synchronize: true,
    }),
    UsersModule,
    PostsModule,
    ReportsModule,
    CategoriesModule,
    LikesModule,
    TimelinesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
