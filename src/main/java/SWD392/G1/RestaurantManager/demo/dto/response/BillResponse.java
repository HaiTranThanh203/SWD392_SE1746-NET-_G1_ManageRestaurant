package SWD392.G1.RestaurantManager.demo.dto.response;


import SWD392.G1.RestaurantManager.demo.dto.response.order.OrderResponse;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
public class BillResponse {
    Long id;
    OrderResponse order;
    double total;
    LocalDateTime dateCreated;
  
}
