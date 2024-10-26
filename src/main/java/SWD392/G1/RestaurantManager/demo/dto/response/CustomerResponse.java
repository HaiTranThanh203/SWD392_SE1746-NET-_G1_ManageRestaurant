package SWD392.G1.RestaurantManager.demo.dto.response;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)

public class CustomerResponse {
    private Long id;
    private String phoneNumber;
    private String name;
    private String address;
    private float point;
  

}
