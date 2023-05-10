import { Column, Entity, OneToMany } from "typeorm";
import AbsModel from "./AbsModel";
import SubtopicModel from "./SubtopicModel";

@Entity("SUBTOPIC_PROMPT")
export default class SubtopicPromptModel extends AbsModel {
  @Column({ name: "GENERATOR_AI", type: "int", nullable: false })
  generatorAI!: number;
  @Column({ name: "TEMPLATE_PROMPT", type: "int", nullable: false })
  templatePrompt!: number;
  @Column({ name: "COMPLETION", type: "text", nullable: false })
  completion!: string;

  @OneToMany(() => SubtopicModel, (item) => item.subtopicPrompt, {
    nullable: true,
  })
  subtopics!: SubtopicModel[];
}
