package SWD392.G1.RestaurantManager.demo.service;

import SWD392.G1.RestaurantManager.demo.dto.response.TableRestaurantResponse;

import java.util.List;

public interface RestaurantTableService {
    List<TableRestaurantResponse> getAllTables();
}
