package SWD392.G1.RestaurantManager.demo.dto.resquest.restaurant;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RestaurantManagerUpdateRequest {
   
    private String restaurantName;
  
    private String address;
   
   
}
