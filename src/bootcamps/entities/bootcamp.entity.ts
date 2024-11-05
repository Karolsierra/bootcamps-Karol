import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Bootcamp {

@PrimaryGeneratedColumn()
id:number

@Column({type: "integer",
    nullable: true
})

phone:number

@Column ({
    type: "varchar",
    nullable: false
})
name: string

@Column({name : 'average_number'})
averageRating: number

@Column ({type: "varchar", nullable: false})
address: string 


@Column({type: "varchar"})
topics: string

@Column({type: "timestamp", 
    default: () => 'CURRENT_TIMESTAMP',
    name: "created_at" })
    createdAt: Date
}