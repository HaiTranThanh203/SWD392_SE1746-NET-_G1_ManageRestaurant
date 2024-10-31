package SWD392.G1.RestaurantManager.demo.service;

import SWD392.G1.RestaurantManager.demo.dto.response.CustomerResponse;
import SWD392.G1.RestaurantManager.demo.dto.resquest.Customer.CustomerRequest;
import SWD392.G1.RestaurantManager.demo.dto.resquest.Customer.CustomerUpdateRequest;

import java.util.List;

public interface CustomerService {
    CustomerResponse createCustomer(CustomerRequest request);

    CustomerResponse updateCustomer(Long id, CustomerUpdateRequest request);
    void deleteCustomer(Long id);
    CustomerResponse viewCustomer(Long id);
    List<CustomerResponse> getAllCustomers();
}
