package SWD392.G1.RestaurantManager.demo.dto.response.order;

import SWD392.G1.RestaurantManager.demo.dto.response.CustomerResponse;
import SWD392.G1.RestaurantManager.demo.dto.response.TableRestaurantResponse;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class OrderResponse {
    Long id;
    LocalDate orderDate;
    TableRestaurantResponse tableRestaurant;
    CustomerResponse customer;
    double totalMoney;
    int totalDish;
}
