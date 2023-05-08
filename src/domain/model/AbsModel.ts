import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

export default class AbsModel {
  @PrimaryGeneratedColumn({ name: "ID", type: "bigint" })
  public id!: number;
  @CreateDateColumn({ name: "CREATE_AT" })
  public readonly created_at!: Date;
  @UpdateDateColumn({ name: "UPDATED_AT" })
  public readonly updated_at!: Date;
  @Column({ name: "IS_ACTIVE", type: "bool", default: true })
  public active: boolean = true;
}
