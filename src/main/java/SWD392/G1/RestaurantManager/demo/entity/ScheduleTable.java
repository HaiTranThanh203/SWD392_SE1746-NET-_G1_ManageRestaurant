package SWD392.G1.RestaurantManager.demo.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class ScheduleTable {
    @EmbeddedId
    private ScheduleTableId id;

    @MapsId("scheduleId")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "scheduleId", nullable = false)
    private Schedule schedule;

    @MapsId("tableId")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "tableId", nullable = false)
    private RestaurantTable table;

}