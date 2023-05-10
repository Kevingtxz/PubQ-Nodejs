import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import AbsModel from "./AbsModel";
import TopicModel from "./TopicModel";
import QuestionModel from "./QuestionModel";
import UserModel from "./UserModel";
import SubtopicPromptModel from "./SubtopicPromptModel";

@Entity("SUBTOPIC")
export default class SubtopicModel extends AbsModel {
  @Column({ name: "NAME", type: "varchar", nullable: false })
  name!: string;

  @ManyToOne(() => SubtopicPromptModel, (item) => item.subtopics, {
    nullable: true,
  })
  @JoinColumn({ name: "PROMPT_ID" })
  subtopicPrompt?: SubtopicPromptModel;
  @ManyToOne(() => TopicModel, (item) => item.subtopics, {
    nullable: false,
  })
  @JoinColumn({ name: "TOPIC_ID" })
  topic!: TopicModel;
  @ManyToOne(() => UserModel, (item) => item.topics, {
    nullable: true,
  })
  @JoinColumn({ name: "USER_ID" })
  user!: UserModel;
  @OneToMany(() => QuestionModel, (item) => item.subtopic)
  questions!: QuestionModel[];
}
