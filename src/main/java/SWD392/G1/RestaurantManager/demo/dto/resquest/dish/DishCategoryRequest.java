package SWD392.G1.RestaurantManager.demo.dto.resquest.dish;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class DishCategoryRequest {
    String name;
    String description;
   
}
