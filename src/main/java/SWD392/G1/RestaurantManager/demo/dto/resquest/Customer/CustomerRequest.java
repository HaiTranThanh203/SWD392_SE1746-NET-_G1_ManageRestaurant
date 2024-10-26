package SWD392.G1.RestaurantManager.demo.dto.resquest.Customer;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)

public class CustomerRequest {
     
     String phoneNumber;
     String name;
     String address;
     
}
