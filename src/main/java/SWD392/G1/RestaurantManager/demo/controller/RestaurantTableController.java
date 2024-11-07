package SWD392.G1.RestaurantManager.demo.controller;

import SWD392.G1.RestaurantManager.demo.dto.response.ApiResponse;
import SWD392.G1.RestaurantManager.demo.dto.response.TableRestaurantResponse;
import SWD392.G1.RestaurantManager.demo.dto.resquest.Table.TableRestaurantRequest;
import SWD392.G1.RestaurantManager.demo.service.RestaurantTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/tables")
@CrossOrigin("*")
public class RestaurantTableController {

    @Autowired
    private RestaurantTableService service;

    @GetMapping("/all")
    public List<TableRestaurantResponse> getAllTables() {
        return service.getAllTables();
    }

    @PutMapping(value = "/{tableRestaurantId}")
    public ApiResponse<TableRestaurantResponse> updateTable(@PathVariable Long tableRestaurantId,
            @RequestBody TableRestaurantRequest request) {
        return ApiResponse.<TableRestaurantResponse>builder()
                .result(service.updateTableByTableId(tableRestaurantId, request)).build();
    }
}
