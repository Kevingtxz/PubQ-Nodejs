import AppData from "../../config/data/app-data";
import UserModel from "../../domain/model/UserModel";
import IUserService from "../IUserService";

export default class UserService implements IUserService {
  repo = AppData.getRepository(UserModel);

  async find(id: number): Promise<UserModel | null> {
    const model = await this.repo.findOne({
      select: { email: true },
      where: { id, active: true },
    });
    return model;
  }

  async insert(model: UserModel): Promise<UserModel> {
    return await this.repo.save(model);
  }
}
