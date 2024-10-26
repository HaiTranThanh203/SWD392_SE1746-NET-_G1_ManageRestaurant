package SWD392.G1.RestaurantManager.demo.dto.resquest.Customer;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CustomerUpdateRequest {
    Long id;
    String phoneNumber;
    String name;
    String address;
}
