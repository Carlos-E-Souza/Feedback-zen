import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Feedback extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', type: 'varchar', length: 100 })
    name: string;

    @Column({ name: 'email', type: 'varchar', length: 100 })
    email: string;

    @Column({
        name: 'message',
        type: 'varchar',
        nullable: true,
        length: 255,
    })
    message?: string;
}
