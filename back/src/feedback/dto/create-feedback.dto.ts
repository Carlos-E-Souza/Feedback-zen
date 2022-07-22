import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateFeedbackDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsOptional()
    @IsString()
    message: string;

    @IsString()
    @IsNotEmpty()
    email: string;
}
