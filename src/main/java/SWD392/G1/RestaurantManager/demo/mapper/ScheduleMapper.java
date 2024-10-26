package SWD392.G1.RestaurantManager.demo.mapper;

import SWD392.G1.RestaurantManager.demo.dto.response.ScheduleResponse;
import SWD392.G1.RestaurantManager.demo.dto.resquest.ScheduleRequest;
import SWD392.G1.RestaurantManager.demo.entity.Schedule;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ScheduleMapper {
    Schedule toSchedule(ScheduleRequest request);
    ScheduleResponse toScheduleResponse(Schedule schedule);
}
