import {
    BaseEntity,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToMany, 
    JoinTable, 
    OneToMany, 
    JoinColumn
} from "typeorm";

import { Job } from ".";

@Entity({ name: `Companies` })
export default class Company extends BaseEntity {

    @PrimaryGeneratedColumn(`increment`)
    id: number;

    @Column({
        type: `varchar`,
        nullable: false
    })
    company_name: string

    @Column({
        type: `varchar`,
        nullable: false
    })
    logo: string;

    @Column({
        type: `varchar`,
        nullable: false
    })
    banner: string;
    
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

    @OneToMany(() => Job, (job) => job.company, {})
    jobs: Job[];
}