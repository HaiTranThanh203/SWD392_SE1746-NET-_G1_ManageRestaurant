package SWD392.G1.RestaurantManager.demo.dto.resquest.Table;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class TableRestaurantUpdateRequest {
    Long id;
    String name;
    int numberChairs;
   boolean status;
   String description;
 
}
