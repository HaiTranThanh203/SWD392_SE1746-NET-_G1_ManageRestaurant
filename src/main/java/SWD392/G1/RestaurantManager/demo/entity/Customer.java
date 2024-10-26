package SWD392.G1.RestaurantManager.demo.entity;
import jakarta.persistence.*;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Nationalized;

@Getter
@Setter
@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customerId", nullable = false)
    private Long id;

    @Column(name = "phoneNumber", length = 15)
    private String phoneNumber;

    @Nationalized
    @Column(name = "nameCustomer")
    private String nameCustomer;

    @Nationalized
    @Column(name = "addressCustomer")
    private String addressCustomer;

    @Column(name = "point")
    private Double point;

}