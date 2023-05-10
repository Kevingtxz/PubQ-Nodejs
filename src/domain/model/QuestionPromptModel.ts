import { Column, Entity, OneToMany } from "typeorm";
import AbsModel from "./AbsModel";
import QuestionModel from "./QuestionModel";

@Entity("QUESTION_PROMPT")
export default class QuestionPromptModel extends AbsModel {
  @Column({ name: "ENUM_GENERATOR_AI", type: "int", nullable: true })
  generatorAI!: number;
  @Column({ name: "ENUM_TEMPLATE_PROMPT", type: "int", nullable: true })
  templatePrompt!: number;
  @Column({ name: "COMPLETION", type: "text", nullable: true })
  completion!: string;

  @OneToMany(() => QuestionModel, (item) => item.questionPrompt, {
    nullable: true,
  })
  questions!: QuestionModel[];
}
