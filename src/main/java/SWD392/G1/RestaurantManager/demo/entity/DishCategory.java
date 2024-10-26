package SWD392.G1.RestaurantManager.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Nationalized;
import jakarta.persistence.*;
@Getter
@Setter
@Entity
public class DishCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "dishCategoryId", nullable = false)
    private Long id;

    @Nationalized
    @Column(name = "name")
    private String name;

    @Nationalized
    @Column(name = "description")
    private String description;

}