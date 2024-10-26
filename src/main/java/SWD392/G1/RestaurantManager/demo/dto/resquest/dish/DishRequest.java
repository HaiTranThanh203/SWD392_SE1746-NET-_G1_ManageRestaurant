package SWD392.G1.RestaurantManager.demo.dto.resquest.dish;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class DishRequest {
   
    String name;

    String description;
   
    double price;
   
    Long dishCategoryId;
   
    String imageUrl;
  
   Boolean status;
}
