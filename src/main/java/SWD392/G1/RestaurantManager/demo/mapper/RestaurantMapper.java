package SWD392.G1.RestaurantManager.demo.mapper;

import SWD392.G1.RestaurantManager.demo.dto.response.RestaurantResponse;
import SWD392.G1.RestaurantManager.demo.dto.resquest.restaurant.RestaurantRequest;
import SWD392.G1.RestaurantManager.demo.entity.Restaurant;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface RestaurantMapper {
    Restaurant toRestaurant(RestaurantRequest request);
    RestaurantResponse toRestaurantResponse(Restaurant restaurant);

   

}
