package SWD392.G1.RestaurantManager.demo.mapper;
import SWD392.G1.RestaurantManager.demo.dto.response.CustomerResponse;
import SWD392.G1.RestaurantManager.demo.dto.resquest.Customer.CustomerRequest;
import SWD392.G1.RestaurantManager.demo.entity.Customer;
import org.mapstruct.Mapping;
import org.mapstruct.Mapper;
@Mapper(componentModel = "spring")
public interface CustomerMapper {
    @Mapping(source = "name", target = "nameCustomer")
    @Mapping(source = "address", target = "addressCustomer")
    Customer toCustomer(CustomerRequest request);

    @Mapping(source = "nameCustomer", target = "name")
    @Mapping(source = "addressCustomer", target = "address")
    CustomerResponse toCustomerResponse(Customer customer);

    @Mapping(source = "name", target = "nameCustomer")
    @Mapping(source = "address", target = "addressCustomer")
    Customer toCustomer(CustomerResponse response);
}
