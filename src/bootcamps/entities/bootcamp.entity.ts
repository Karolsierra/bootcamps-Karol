import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Bootcamp {

@PrimaryGeneratedColumn()
id:number

@Column()
phone:number

@Column ()
name: string

@Column({name : 'average_number'})
averageRating: number

}