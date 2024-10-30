package SWD392.G1.RestaurantManager.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import SWD392.G1.RestaurantManager.demo.dto.resquest.ScheduleRequest;
import SWD392.G1.RestaurantManager.demo.service.IScheduleService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/schedules")
@RequiredArgsConstructor
public class ScheduleController {
    @Autowired
    IScheduleService scheduleService;

    @PostMapping("/create")
    public ResponseEntity<String> createSchedule(@RequestBody ScheduleRequest request) {
        return new ResponseEntity<>(scheduleService.createSchedule(request), HttpStatus.OK);
    }
}
