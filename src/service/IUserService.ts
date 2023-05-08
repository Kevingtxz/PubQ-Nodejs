import UserModel from "../domain/model/UserModel";

export default interface IUserService {
  find(id: number): Promise<UserModel | null>;
  insert(model: UserModel): Promise<UserModel>;
}
