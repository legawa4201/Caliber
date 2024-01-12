import {
    BaseEntity,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany, 
    JoinColumn
} from "typeorm";

import { MyJob } from ".";

@Entity({ name: `Applicants` })
export default class Applicant extends BaseEntity {

    @PrimaryGeneratedColumn(`increment`)
    id: number;

    @Column({
        type: `varchar`,
        nullable: false,
        unique: true,
        length: 20
    })
    username: string;

    @Column({
        type: `varchar`,
        nullable: false
    })
    password: string;

    @Column({
        type: `varchar`,
        nullable: true
    })
    profile_pic: string;

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

    @OneToMany(() => MyJob, (myjob) => myjob.applicant, { lazy: true })
    @JoinColumn({
        name: `applicant_id`,
        referencedColumnName: `applicant_id`
    })
    myjobs: MyJob[];
}