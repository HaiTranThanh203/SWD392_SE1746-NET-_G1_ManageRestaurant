package SWD392.G1.RestaurantManager.demo.controller;

import SWD392.G1.RestaurantManager.demo.dto.response.TableRestaurantResponse;
import SWD392.G1.RestaurantManager.demo.service.RestaurantTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/tables")
public class RestaurantTableController {

    @Autowired
    private RestaurantTableService service;

    @GetMapping("/all")
    public List<TableRestaurantResponse> getAllTables() {
        return service.getAllTables();
    }
}
