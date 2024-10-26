package SWD392.G1.RestaurantManager.demo.mapper;

import SWD392.G1.RestaurantManager.demo.dto.response.order.DishOrderResponse;
import SWD392.G1.RestaurantManager.demo.dto.resquest.order.DishOrderRequest;
import SWD392.G1.RestaurantManager.demo.entity.DishOrder;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface DishOrderMapper {
    DishOrder toDishOrder(DishOrderRequest req);
    DishOrderResponse toDishOrderResponse(DishOrder dishOrder);
    void updateDishOrder(@MappingTarget DishOrder dishOrder,DishOrderRequest request);
}
