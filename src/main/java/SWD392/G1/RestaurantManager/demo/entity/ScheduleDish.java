package SWD392.G1.RestaurantManager.demo.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Entity
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
public class ScheduleDish {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
  
    @ManyToOne
    Dish dish;
    @ManyToOne
    Schedule schedule;
    int quantity;
}
