package SWD392.G1.RestaurantManager.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.Hibernate;

import java.util.Objects;

@Getter
@Setter
@Embeddable
public class ScheduleTableId implements java.io.Serializable {
    private static final long serialVersionUID = -9131296584826608772L;
    @Column(name = "scheduleId", nullable = false)
    private Long scheduleId;

    @Column(name = "tableId", nullable = false)
    private Long tableId;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        ScheduleTableId entity = (ScheduleTableId) o;
        return Objects.equals(this.tableId, entity.tableId) &&
                Objects.equals(this.scheduleId, entity.scheduleId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(tableId, scheduleId);
    }

}