package SWD392.G1.RestaurantManager.demo.service;

import SWD392.G1.RestaurantManager.demo.dto.resquest.ScheduleRequest;

public interface IScheduleService {
    String createSchedule(ScheduleRequest request);
}