import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import AbsModel from "./AbsModel";
import TopicModel from "./TopicModel";
import UserModel from "./UserModel";

@Entity("TOPIC_REPORT")
export default class TopicReportModel extends AbsModel {
  @Column({ name: "TEXT", type: "text", nullable: false })
  text!: string;

  @ManyToOne(() => TopicModel, (item) => item.topicReports, {
    nullable: false,
  })
  @JoinColumn({ name: "TOPIC_ID" })
  topic!: TopicModel;
  @ManyToOne(() => UserModel, (item) => item.topicReports, {
    nullable: false,
  })
  @JoinColumn({ name: "USER_ID" })
  user!: UserModel;
}
