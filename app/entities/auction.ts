import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Player } from './player'

@Entity()
export class Auction {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  player: Player

  @Column()
  price: number

  @Column()
  duration: number

  @Column()
  foundAt: Date

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
