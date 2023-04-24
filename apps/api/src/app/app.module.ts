import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import configs from '../../../../config/api.config';
import { CategoriesModule } from './categories/categories.module';
import { LikesModule } from './likes/likes.module';
import { PostsModule } from './posts/posts.module';
import { ReportsModule } from './reports/reports.module';
import { TimelinesModule } from './timelines/timelines.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [configs],
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
