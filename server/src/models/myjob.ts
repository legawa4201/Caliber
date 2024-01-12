import {
    BaseEntity,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    ManyToOne
} from "typeorm";

import { Applicant, Job } from ".";

@Entity({ name: `MyJobs` })
export default class MyJob extends BaseEntity {

    @PrimaryGeneratedColumn(`increment`)
    id: number;

    @Column({
        type: `integer`,
        nullable: false
    })
    applicant_id: number;

    @Column({
        type: `integer`,
        nullable: false
    })
    job_id: number;

    @Column({
        type: `timestamptz`,
        nullable: false,
        default: () => `NOW()`
    })
    created_at: Date;

    @Column({
        type: `timestamptz`,
        nullable: false,
        default: () => `NOW()`
    })
    updated_at: Date;

    @ManyToOne(() => Applicant, {})
    @JoinColumn({
        name: `applicant_id`
    })
    applicant: Applicant;

    @ManyToOne(() => Job, {})
    @JoinColumn({
        name: `job_id`
    })
    job: Job;
}