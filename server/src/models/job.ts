import {
    BaseEntity,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany, 
    JoinColumn,
ManyToOne
} from "typeorm";

import { Company, MyJob } from ".";

@Entity({ name: `Jobs` })
export default class Job extends BaseEntity {

    @PrimaryGeneratedColumn(`increment`)
    id: number;

    @Column({
        type: `varchar`,
        nullable: false
    })
    title: string;

    @Column({
        type: `varchar`,
        nullable: false
    })
    description: string;

    @Column({
        type: `varchar`,
        array: true
    })
    skills: string[];

    @Column({
        type: `integer`,
        nullable: false
    })
    company_id: string;

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

    @ManyToOne(() => Company, (company) => company.jobs, {})
    @JoinColumn({
        name: `company_id`
    })
    company: Company;

    @OneToMany(() => MyJob, (myjob) => myjob.job, { lazy: true })
    @JoinColumn({
        name: `job_id`,
    })
    myjobs: MyJob[];
}