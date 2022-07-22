import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedbackModule } from './feedback/feedback.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feedback } from './feedback/entities/feedback.entity';

@Module({
    imports: [
        FeedbackModule,
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'postgres',
            url: process.env.DATABASE_URL,
            entities: [Feedback],
            synchronize: process.env.DB_SYNCHRONIZE === 'true',
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
