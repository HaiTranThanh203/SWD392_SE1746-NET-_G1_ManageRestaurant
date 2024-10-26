package SWD392.G1.RestaurantManager.demo.dto.response;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class TableRestaurantResponse {
    Long id;
    String name;
    String description;
    int numberChairs;
    boolean booked;
}
