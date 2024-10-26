package SWD392.G1.RestaurantManager.demo.dto.response;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class ScheduleTimeResponse {
    LocalDate date;
    int numbersSchedule;
}
