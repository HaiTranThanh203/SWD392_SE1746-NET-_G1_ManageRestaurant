package SWD392.G1.RestaurantManager.demo.mapper;

import SWD392.G1.RestaurantManager.demo.dto.response.CustomerResponse;
import SWD392.G1.RestaurantManager.demo.dto.resquest.Customer.CustomerRequest;
import SWD392.G1.RestaurantManager.demo.entity.Customer;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CustomerMapper {
    Customer toCustomer(CustomerRequest request);
    CustomerResponse toCustomerResponse(Customer customer);
}
