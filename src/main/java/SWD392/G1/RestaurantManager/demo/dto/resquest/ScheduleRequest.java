package SWD392.G1.RestaurantManager.demo.dto.resquest;

import SWD392.G1.RestaurantManager.demo.dto.resquest.order.DishOrderRequest;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;
import java.util.List;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ScheduleRequest {

    String customerName;

    String customerPhone;
    String note;

    LocalDate bookedDate;

    String time;

    double deposit;

    int numbersOfCustomer;

    List<Long> tables;

    List<DishOrderRequest> scheduleDishes;
}
