package SWD392.G1.RestaurantManager.demo.service;

import SWD392.G1.RestaurantManager.demo.dto.response.TableRestaurantResponse;
import SWD392.G1.RestaurantManager.demo.dto.resquest.Table.TableRestaurantRequest;
import SWD392.G1.RestaurantManager.demo.entity.RestaurantTable;

import java.util.List;

public interface RestaurantTableService {
    List<TableRestaurantResponse> getAllTables();
    RestaurantTable findById(Long tableId);
    TableRestaurantResponse updateTableByTableId(Long tableId, TableRestaurantRequest request);
}
