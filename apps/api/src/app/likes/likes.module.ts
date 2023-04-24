import { Module } from '@nestjs/common';
import { LikesService } from './services/likes.service';
import { LikesController } from './likes.controller';

@Module({
  controllers: [LikesController],
  providers: [LikesService],
})
export class LikesModule {}
