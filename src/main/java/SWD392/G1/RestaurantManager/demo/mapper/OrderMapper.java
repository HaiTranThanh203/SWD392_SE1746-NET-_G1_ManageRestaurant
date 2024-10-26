package SWD392.G1.RestaurantManager.demo.mapper;

import SWD392.G1.RestaurantManager.demo.dto.response.order.OrderResponse;
import SWD392.G1.RestaurantManager.demo.dto.resquest.order.OrderRequest;
import SWD392.G1.RestaurantManager.demo.entity.Order;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")

public interface OrderMapper {
    Order toOrder(OrderRequest request);
    OrderResponse toOrderResponse(Order order);
}
