package SWD392.G1.RestaurantManager.demo.mapper;

import SWD392.G1.RestaurantManager.demo.dto.response.DishResponse;
import SWD392.G1.RestaurantManager.demo.dto.resquest.dish.DishRequest;
import SWD392.G1.RestaurantManager.demo.dto.resquest.dish.DishUpdateRequest;
import SWD392.G1.RestaurantManager.demo.entity.Dish;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface DishMapper {
    Dish toDish(DishRequest req);
    DishResponse toDishResponse(Dish dish);
    void updateDish(@MappingTarget Dish dish, DishUpdateRequest request);
}
