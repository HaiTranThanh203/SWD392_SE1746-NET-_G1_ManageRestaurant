package SWD392.G1.RestaurantManager.demo.exception;

import SWD392.G1.RestaurantManager.demo.dto.response.ApiResponse;


import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.naming.AuthenticationException;
import java.nio.file.AccessDeniedException;
import java.util.Map;
import java.util.Objects;

@ControllerAdvice
@Slf4j
public class GlobalHandleException {
    private static final String MIN_ATTRIBUTE = "min";
    private static final String MAX_ATTRIBUTE = "max";

    private static final String VALUE_ATTRIBUTE = "value";
    @ExceptionHandler(value = Exception.class)
    ResponseEntity<ApiResponse> handlingRuntimeException(RuntimeException exception) {
        log.error("Exception: ", exception);
        ApiResponse apiResponse = new ApiResponse();

        apiResponse.setCode(ErrorCode.UNCATEGORIZED_EXCEPTION.getCode());
        apiResponse.setMessage(ErrorCode.UNCATEGORIZED_EXCEPTION.getMessage());

        return ResponseEntity.badRequest().body(apiResponse);
    }
    @ExceptionHandler(value = AppException.class)
    public ResponseEntity<ApiResponse> handleAppException(AppException exception){
        ErrorCode errorCode = exception.getErrorCode();
        return ResponseEntity.badRequest().body(ApiResponse.builder()
                .message(errorCode.getMessage())
                .code(errorCode.getCode())
                .build());
    }
    @ExceptionHandler(value = AccessDeniedException.class)
    public ResponseEntity<ApiResponse> handleAccessDenied(AccessDeniedException exception){
        ErrorCode errorCode = ErrorCode.UNAUTHORIZED;
        return ResponseEntity.status(errorCode.getStatusCode()).body(ApiResponse.builder()
                .code(errorCode.getCode())
                .message(errorCode.getMessage())
                .build());
    }
    @ExceptionHandler(value = AuthenticationException.class)
    public ResponseEntity<ApiResponse> handleAuthenticationException(AuthenticationException e){
        ErrorCode errorCode = ErrorCode.INVALID_TOKEN;
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ApiResponse.builder()
                .code(errorCode.getStatusCode().value())
                .message(errorCode.getMessage())
                .build());
    }
    
    private String mapAttribute(String message, Map<String, Object> attributes) {
        String minValue = String.valueOf(attributes.get(MIN_ATTRIBUTE));
        String value = String.valueOf(attributes.get(VALUE_ATTRIBUTE));
        String max = String.valueOf(attributes.get(MAX_ATTRIBUTE));
        log.info("max : " + max + " min : " + minValue + " value : " + value);

        if(value != null && !"null".equals(value)){
            log.info("value : " + value);
            return message.replace("{" + VALUE_ATTRIBUTE + "}", value);
        } else if(max != null && !"null".equals(max)){
            log.info("max : " + max);
            return message.replace("{" + MAX_ATTRIBUTE + "}", max);
        }
        log.info("min : " + minValue);
        return message.replace("{" + MIN_ATTRIBUTE + "}", minValue);
    }
}
