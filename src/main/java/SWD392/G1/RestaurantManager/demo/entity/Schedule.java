package SWD392.G1.RestaurantManager.demo.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Nationalized;

import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
@Entity
public class Schedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "scheduleId", nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customerId")
    private Customer customer;

    @Nationalized
    @Column(name = "note")
    private String note;

    @Column(name = "deposit")
    private Double deposit;

    @Column(name = "numberOfCustomers")
    private int numberOfCustomers;

    @Column(name = "bookDate")
    private LocalDate bookDate;

    @Column(name = "time")
    private LocalTime time;

    @Column(name = "status")
    private String status;
}