package SWD392.G1.RestaurantManager.demo.dto.response;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ApiResponse<T> {
    @Builder.Default
    private int code = 200;
    private String message;
    private T result;
}

