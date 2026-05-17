import { ROLE_PERMISSIONS } from "@/contants/rolePermissions";
import { Permission } from "@/contants/permissions";
import { Role } from "@/contants/roles";

export function canAccess(role: Role, permission: Permission) {
  return ROLE_PERMISSIONS[role]?.includes(permission);
}
