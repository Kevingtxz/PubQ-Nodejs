import { Column, Entity, OneToMany } from "typeorm";
import AbsModel from "./AbsModel";
import TopicModel from "./TopicModel";
import QuestionModel from "./QuestionModel";
import SubtopicModel from "./SubtopicModel";
import TopicReportModel from "./TopicReportModel";

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

  @OneToMany(() => QuestionModel, (item) => item.user)
  questions!: QuestionModel[];
  @OneToMany(() => SubtopicModel, (item) => item.user)
  subtopics!: SubtopicModel[];
  @OneToMany(() => TopicModel, (item) => item.user)
  topics!: TopicModel[];
  @OneToMany(() => TopicReportModel, (item) => item.user)
  topicReports!: TopicReportModel[];
}
