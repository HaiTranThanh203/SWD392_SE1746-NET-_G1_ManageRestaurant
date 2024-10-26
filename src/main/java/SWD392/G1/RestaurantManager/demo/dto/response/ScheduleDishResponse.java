package SWD392.G1.RestaurantManager.demo.dto.response;


import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class ScheduleDishResponse {
    Long id;
    
    DishResponse dish;
    int quantity;
}
