import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import AbsModel from "./AbsModel";
import SubtopicModel from "./SubtopicModel";
import UserModel from "./UserModel";
import QuestionAnswearModel from "./QuestionAnswearModel";

@Entity("QUESTION")
export default class QuestionModel extends AbsModel {
  @Column({ name: "TEXT", type: "text", nullable: false })
  text!: string;
  @Column({ name: "OPTION_A", type: "varchar", nullable: false })
  a!: string;
  @Column({ name: "OPTION_B", type: "varchar", nullable: false })
  b!: string;
  @Column({ name: "OPTION_C", type: "varchar", nullable: false })
  c!: string;
  @Column({ name: "OPTION_D", type: "varchar", nullable: false })
  d!: string;
  @Column({ name: "OPTION_E", type: "varchar", nullable: false })
  e!: string;
  @Column({ name: "CORRECT", type: "int", nullable: false })
  correct!: number;
  @Column({ name: "EXPLANATION", type: "text", nullable: false })
  explanation!: string;
  @Column({ name: "ENUM_DIFFICULTY", type: "int", nullable: false })
  difficulty!: number;

  @ManyToOne(() => UserModel, (item) => item.topics, {
    nullable: true,
  })
  @JoinColumn({ name: "USER_ID" })
  user!: UserModel;
  @ManyToOne(() => SubtopicModel, (item) => item.questions, {
    nullable: false,
  })
  @JoinColumn({ name: "SUBTOPIC_ID" })
  subtopic!: SubtopicModel;
  @OneToMany(() => QuestionAnswearModel, (item) => item.question)
  questionAnswears!: QuestionAnswearModel[];
}
