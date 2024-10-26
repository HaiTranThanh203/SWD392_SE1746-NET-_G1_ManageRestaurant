package SWD392.G1.RestaurantManager.demo.dto.response.order;

import SWD392.G1.RestaurantManager.demo.dto.response.DishResponse;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import java.time.LocalDateTime;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class DishOrderResponse {
    Long id;
    DishResponse dish;
    OrderResponse order;
    int quantity;
    String status;
    LocalDateTime orderDate;
}
