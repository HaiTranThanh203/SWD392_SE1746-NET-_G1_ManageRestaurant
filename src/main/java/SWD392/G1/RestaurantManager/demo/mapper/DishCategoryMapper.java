package SWD392.G1.RestaurantManager.demo.mapper;

import SWD392.G1.RestaurantManager.demo.dto.response.DishCategoryResponse;
import SWD392.G1.RestaurantManager.demo.dto.resquest.dish.DishCategoryRequest;
import SWD392.G1.RestaurantManager.demo.entity.DishCategory;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface DishCategoryMapper {

    DishCategory toDishCategory(DishCategoryRequest req);
    DishCategoryResponse toDishCategoryResponse(DishCategory dishCategory);

    void updateDishCategory(@MappingTarget DishCategory dishCategory, DishCategoryRequest request);
}
