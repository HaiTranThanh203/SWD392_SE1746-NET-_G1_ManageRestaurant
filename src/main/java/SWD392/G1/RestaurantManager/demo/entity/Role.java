package SWD392.G1.RestaurantManager.demo.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Nationalized;

@Getter
@Setter
@Entity
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "roleId", nullable = false)
    private Long id;

    @Nationalized
    @Column(name = "name", length = 100)
    private String name;

    @Nationalized
    @Column(name = "description")
    private String description;

}