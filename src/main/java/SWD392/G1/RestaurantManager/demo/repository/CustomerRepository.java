package SWD392.G1.RestaurantManager.demo.repository;

import SWD392.G1.RestaurantManager.demo.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
