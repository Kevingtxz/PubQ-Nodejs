import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import AbsModel from "./AbsModel";
import QuestionModel from "./QuestionModel";
import UserModel from "./UserModel";

@Entity("QUESTION_ANSWEAR")
export default class QuestionAnswearModel extends AbsModel {
  @Column({ name: "ANSWEAR", type: "int", nullable: false })
  answear!: number;

  @ManyToOne(() => UserModel, (item) => item.questionAnswears, {
    nullable: false,
  })
  @JoinColumn({ name: "USER_ID" })
  user!: UserModel;
  @ManyToOne(() => QuestionModel, (item) => item.questionAnswears, {
    nullable: false,
  })
  @JoinColumn({ name: "QUESTION_ID" })
  question!: QuestionModel;
}
