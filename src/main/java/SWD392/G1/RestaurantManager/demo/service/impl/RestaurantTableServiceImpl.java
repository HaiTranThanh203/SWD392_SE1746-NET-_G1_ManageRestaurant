package SWD392.G1.RestaurantManager.demo.service.impl;

import SWD392.G1.RestaurantManager.demo.dto.response.TableRestaurantResponse;
import SWD392.G1.RestaurantManager.demo.entity.RestaurantTable;
import SWD392.G1.RestaurantManager.demo.mapper.TableRestaurantMapper;
import SWD392.G1.RestaurantManager.demo.repository.RestaurantTableRepository;
import SWD392.G1.RestaurantManager.demo.service.RestaurantTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RestaurantTableServiceImpl implements RestaurantTableService {

    @Autowired
    private RestaurantTableRepository repository;

    @Autowired
    private TableRestaurantMapper mapper;

    @Override
    public List<TableRestaurantResponse> getAllTables() {
        List<RestaurantTable> tables = repository.findAll();
        return tables.stream().map(mapper::toTableRestaurantResponse).collect(Collectors.toList());
    }
}