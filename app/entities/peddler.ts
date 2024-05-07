import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Item } from './item'
import { Player } from './player'

@Entity()
export class Peddler {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  player: Player

  @ManyToMany(() => Player, (player) => player.peddlers)
  items: Item[]

  @Column()
  price: number

  @Column()
  foundAt: Date

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
