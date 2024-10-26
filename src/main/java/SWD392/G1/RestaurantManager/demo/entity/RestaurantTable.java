package SWD392.G1.RestaurantManager.demo.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Nationalized;

@Getter
@Setter
@Entity
@Table(name = "RestaurantTable", schema = "dbo")
public class RestaurantTable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tableId", nullable = false)
    private Long id;

    @Column(name = "numberChair")
    private Integer numberChair;

    @Nationalized
    @Column(name = "description")
    private String description;
    
    
    @Column(name = "status")
    private boolean status;
}