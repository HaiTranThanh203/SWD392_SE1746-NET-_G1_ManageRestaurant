package SWD392.G1.RestaurantManager.demo.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Nationalized;

@Getter
@Setter
@Entity
public class Dish {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "dishId", nullable = false)
    private Long id;

    @Nationalized
    @Column(name = "foodName")
    private String foodName;

    @Nationalized
    @Column(name = "description")
    private String description;

    @Column(name = "price")
    private Double price;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "categoryId")
    private DishCategory category;

    @Nationalized
    @Column(name = "image")
    private String image;

    @Column(name = "status")
    private Boolean status;

}