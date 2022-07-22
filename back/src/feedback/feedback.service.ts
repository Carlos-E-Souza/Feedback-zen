import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { Feedback } from './entities/feedback.entity';

@Injectable()
export class FeedbackService {
    constructor(
        @InjectRepository(Feedback)
        private readonly repository: Repository<Feedback>,
    ) {}

    async create(createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {
        const feedback = this.repository.create(createFeedbackDto);
        return await this.repository.save(feedback);
    }

    findAll(): Promise<Feedback[]> {
        return this.repository.find();
    }

    findOne(id: string): Promise<Feedback | null> {
        return this.repository.findOneBy({ id });
    }

    async delete(id: string) {
        const feedback = await this.repository.findBy({ id });
        return this.repository.remove(feedback);
    }
}
