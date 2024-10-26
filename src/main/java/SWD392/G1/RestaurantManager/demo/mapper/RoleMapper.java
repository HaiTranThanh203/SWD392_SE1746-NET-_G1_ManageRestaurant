package SWD392.G1.RestaurantManager.demo.mapper;

import SWD392.G1.RestaurantManager.demo.dto.response.RoleResponse;
import SWD392.G1.RestaurantManager.demo.dto.resquest.RoleRequest;
import SWD392.G1.RestaurantManager.demo.entity.Role;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface RoleMapper {
    Role toRole(RoleRequest request);
    RoleResponse toRoleResponse(Role role);
}
