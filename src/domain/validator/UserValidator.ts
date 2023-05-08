import { permissionMap } from "../enum/permission-enum";
import { providerMap } from "../enum/provider-enum";
import UserForm from "../form/UserForm";

export default class UserValidator {
  static formValidation({ email, permission, provider }: UserForm): void {
    this.emailValidation(email);
    this.permissionValidation(permission);
    this.providerValidation(provider);
  }

  static emailValidation(email: string): void {
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (!emailRegex.test(email)) {
      throw new Error("Email is not valid");
    }
  }

  static permissionValidation(permission: number): void {
    if (!permissionMap.get(permission)) {
      throw new Error("Permission is not valid");
    }
  }

  static providerValidation(provider: number): void {
    if (!providerMap.get(provider)) {
      throw new Error("Provider is not valid");
    }
  }
}
