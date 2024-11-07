package SWD392.G1.RestaurantManager.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import SWD392.G1.RestaurantManager.demo.entity.Schedule;

public interface IScheduleRepository extends JpaRepository<Schedule, Long> {
}
