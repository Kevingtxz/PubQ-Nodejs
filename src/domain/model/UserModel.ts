import { Column, Entity } from "typeorm";
import AbsModel from "./AbsModel";

@Entity("USER")
export default class UserModel extends AbsModel {
  @Column({
    name: "EMAIL",
    type: "varchar",
    length: 255,
    unique: true,
    nullable: false,
  })
  email!: string;
  @Column({ name: "ENUM_PROVIDER", type: "int", nullable: false })
  provider!: number;
  @Column({ name: "ENUM_PERMISSION", type: "int", nullable: false })
  permission!: number;
}
