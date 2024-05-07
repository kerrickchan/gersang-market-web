import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { Peddler } from './peddler'
import { Auction } from './auction'

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @OneToMany(() => Auction, (auction) => auction.player)
  auctions: Auction[]

  @OneToMany(() => Peddler, (peddler) => peddler.player)
  peddlers: Peddler[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
