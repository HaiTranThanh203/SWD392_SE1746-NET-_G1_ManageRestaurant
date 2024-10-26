package SWD392.G1.RestaurantManager.demo.dto.resquest.order;

import SWD392.G1.RestaurantManager.demo.dto.response.CustomerResponse;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class OrderRequest {
   
    Long tableId;
    Long employeeId;
    CustomerResponse customerResponse;
   
}
