import UserModel from "../../domain/model/UserModel";

export default class UserView {
  private constructor(
    public readonly id: number,
    public readonly email: string
  ) {}

  static toView(model: UserModel): UserView {
    return {
      id: model.id,
      email: model.email,
    };
  }
}
