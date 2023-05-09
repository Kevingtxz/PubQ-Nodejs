import TopicReportForm from "../form/TopicReportForm";

export default class TopicReportValidator {
  static formValidation({ text, topicId, userId }: TopicReportForm): void {
    this.textValidation(text);
    this.topicIdvalidation(topicId);
    this.userIdValidation(userId);
  }

  static textValidation(text: string) {
    if (text.length < 1 || text.length > 3000) {
      throw new Error("Text is not valid");
    }
  }

  static topicIdvalidation(topicId: number) {
    if (topicId < 1) {
      throw new Error("TopicId is not valid");
    }
  }

  static userIdValidation(userId?: number) {
    if (!userId || userId < 1) {
      throw new Error("UserId is not valid");
    }
  }
}
