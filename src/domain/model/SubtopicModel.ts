import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import AbsModel from "./AbsModel";
import TopicModel from "./TopicModel";

@Entity("SUBTOPIC")
export default class SubtopicModel extends AbsModel {
  @Column({ name: "NAME", type: "varchar", nullable: false })
  name!: string;

  @ManyToOne(() => TopicModel, (item) => item.subtopics, {
    nullable: false,
  })
  @JoinColumn({ name: "TOPIC_ID" })
  topic!: TopicModel;
}
