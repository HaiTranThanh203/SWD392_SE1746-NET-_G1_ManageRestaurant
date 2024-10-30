package SWD392.G1.RestaurantManager.demo.mapper;

import SWD392.G1.RestaurantManager.demo.dto.response.TableRestaurantResponse;
import SWD392.G1.RestaurantManager.demo.dto.resquest.Table.TableRestaurantRequest;
import SWD392.G1.RestaurantManager.demo.dto.resquest.Table.TableRestaurantUpdateRequest;
import SWD392.G1.RestaurantManager.demo.entity.RestaurantTable;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface TableRestaurantMapper {
    // Explicitly mapping numberChair and status fields
    @Mapping(target = "numberChair", source = "numberChair")
    @Mapping(target = "status", source = "status")
    RestaurantTable toTableRestaurant(TableRestaurantRequest request);

    @Mapping(target = "numberChair", source = "numberChair")
    @Mapping(target = "status", source = "status")
    TableRestaurantResponse toTableRestaurantResponse(RestaurantTable tableRestaurant);

    TableRestaurantRequest toTableRestaurantRequest(TableRestaurantUpdateRequest request);

    void updateTable(@MappingTarget RestaurantTable tableRestaurant, TableRestaurantRequest request);
}

