import UserForm from "../form/UserForm";
import UserModel from "../model/UserModel";
import UserValidator from "../validator/UserValidator";

export default class UserFactory {
  static createByForm({ email, permission, provider }: UserForm) {
    UserValidator.formValidation({ email, permission, provider });

    const model = new UserModel();
    model.email = email;
    model.permission = permission;
    model.provider = provider;
    return model;
  }

  static createWithId(id: number) {
    const model = new UserModel();
    model.id = id;
    return model;
  }
}
