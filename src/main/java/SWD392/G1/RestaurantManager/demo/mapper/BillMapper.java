package SWD392.G1.RestaurantManager.demo.mapper;

import SWD392.G1.RestaurantManager.demo.dto.response.BillResponse;
import SWD392.G1.RestaurantManager.demo.dto.resquest.BillRequest;
import SWD392.G1.RestaurantManager.demo.entity.Bill;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")

public interface BillMapper {
    Bill toBill(BillRequest request);
    BillResponse toBillResponse(Bill bill);
}
