import UserForm from "../form/UserForm";
import UserModel from "../model/UserModel";
import UserValidator from "../validator/UserValidator";

export default class UserFactory {
  static createByForm(form: UserForm) {
    UserValidator.formValidation(form);
    const { email, permission, provider } = form;

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
