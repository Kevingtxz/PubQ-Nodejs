export interface PermissionInterface {
  cod: number;
  description: string;
}

export enum PermissionEnum {
  USER = 1,
  FULL = 2,
  ADMIN = 3,
  OWNER = 4,
}

const permissionMap = new Map<Number, PermissionInterface>();
permissionMap.set(PermissionEnum.USER, {
  cod: PermissionEnum.USER,
  description: "USER",
});
permissionMap.set(PermissionEnum.FULL, {
  cod: PermissionEnum.FULL,
  description: "FULL",
});
permissionMap.set(PermissionEnum.ADMIN, {
  cod: PermissionEnum.ADMIN,
  description: "ADMIN",
});
permissionMap.set(PermissionEnum.OWNER, {
  cod: PermissionEnum.OWNER,
  description: "ADMIN",
});

export { permissionMap };
