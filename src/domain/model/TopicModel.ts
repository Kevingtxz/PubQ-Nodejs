import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import AbsModel from "./AbsModel";
import SubtopicModel from "./SubtopicModel";
import UserModel from "./UserModel";

@Entity("TOPIC")
export default class TopicModel extends AbsModel {
  @Column({ name: "NAME", type: "varchar", unique: true, nullable: false })
  name!: string;

  @ManyToOne(() => UserModel, (item) => item.topics, {
    nullable: false,
  })
  @JoinColumn({ name: "USER_ID" })
  user!: UserModel;
  @OneToMany(() => SubtopicModel, (item) => item.topic)
  subtopics!: SubtopicModel[];
}
