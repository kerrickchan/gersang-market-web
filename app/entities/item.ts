import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  code: string

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  image: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
