package SWD392.G1.RestaurantManager.demo.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Nationalized;

@Getter
@Setter
@Entity
public class Restaurant {
    @Id
    
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "restaurantId", nullable = false)
    private Long id;

    @Nationalized
    @Column(name = "restaurantName")
    private String restaurantName;

    @Nationalized
    @Column(name = "address")
    private String address;

}