package SWD392.G1.RestaurantManager.demo.mapper;

import SWD392.G1.RestaurantManager.demo.dto.response.ScheduleDishResponse;
import SWD392.G1.RestaurantManager.demo.entity.ScheduleDish;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")

public interface ScheduleDishMapper {
    ScheduleDishResponse toScheduleResponse(ScheduleDish scheduleDish);
}
