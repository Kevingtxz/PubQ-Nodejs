import { Column, Entity, OneToMany } from "typeorm";
import AbsModel from "./AbsModel";
import SubtopicModel from "./SubtopicModel";

@Entity("TOPIC")
export default class TopicModel extends AbsModel {
  @Column({ name: "NAME", type: "varchar", unique: true, nullable: false })
  name!: string;

  @OneToMany(() => SubtopicModel, (item) => item.topic)
  subtopics!: SubtopicModel[];
}
