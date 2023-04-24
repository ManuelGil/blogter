import { IsString, MaxLength } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @MaxLength(36)
  uuid: string;

  @IsString()
  @MaxLength(100)
  title: string;

  @IsString()
  @MaxLength(255)
  cover: string;

  @IsString()
  @MaxLength(255)
  summary: string;
}
