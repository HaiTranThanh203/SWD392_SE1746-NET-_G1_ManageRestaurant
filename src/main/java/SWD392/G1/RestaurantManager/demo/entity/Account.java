package SWD392.G1.RestaurantManager.demo.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Nationalized;

@Getter
@Setter
@Entity
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "accountId", nullable = false)
    private Long id;

    @Column(name = "phoneNumber", length = 15)
    private String phoneNumber;

    @Nationalized
    @Column(name = "name")
    private String name;

    @Nationalized
    @Column(name = "password")
    private String password;

    @Nationalized
    @Column(name = "email")
    private String email;

    @Column(name = "status")
    private Boolean status;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "roleId")
    private Role role;

}