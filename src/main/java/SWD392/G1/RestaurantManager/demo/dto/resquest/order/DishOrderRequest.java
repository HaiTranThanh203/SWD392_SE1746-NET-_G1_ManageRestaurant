package SWD392.G1.RestaurantManager.demo.dto.resquest.order;


import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class DishOrderRequest {
 
    Long dishId;

 
    int quantity;
}
