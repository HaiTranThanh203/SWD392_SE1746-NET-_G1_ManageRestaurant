package SWD392.G1.RestaurantManager.demo.repository;
import SWD392.G1.RestaurantManager.demo.entity.RestaurantTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RestaurantTableRepository extends JpaRepository<RestaurantTable, Long> {
}
