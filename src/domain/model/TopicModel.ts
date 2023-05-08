import { Column, Entity } from "typeorm";
import AbsModel from "./AbsModel";

@Entity("TOPIC")
export default class TopicModel extends AbsModel {
  @Column({ name: "NAME", type: "varchar", unique: true, nullable: false })
  name!: string;
}
