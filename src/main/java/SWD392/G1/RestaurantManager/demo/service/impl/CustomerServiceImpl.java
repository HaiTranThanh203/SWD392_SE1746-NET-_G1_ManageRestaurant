package SWD392.G1.RestaurantManager.demo.service.impl;

import SWD392.G1.RestaurantManager.demo.dto.response.CustomerResponse;
import SWD392.G1.RestaurantManager.demo.dto.resquest.Customer.CustomerRequest;
import SWD392.G1.RestaurantManager.demo.dto.resquest.Customer.CustomerUpdateRequest;
import SWD392.G1.RestaurantManager.demo.entity.Customer;
import SWD392.G1.RestaurantManager.demo.exception.AppException;
import SWD392.G1.RestaurantManager.demo.exception.ErrorCode;
import SWD392.G1.RestaurantManager.demo.mapper.CustomerMapper;
import SWD392.G1.RestaurantManager.demo.repository.CustomerRepository;
import SWD392.G1.RestaurantManager.demo.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {

    private final CustomerRepository customerRepository;
    private final CustomerMapper customerMapper;

    @Override
    public CustomerResponse createCustomer(CustomerRequest request) {
        Customer customer = customerMapper.toCustomer(request);
        customer = customerRepository.save(customer);
        return customerMapper.toCustomerResponse(customer);
    }


    @Override
    @Transactional
    public CustomerResponse updateCustomer(Long id, CustomerUpdateRequest request) {
        Customer customer = customerRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.CUSTOMER_NOT_EXIST));

        customer.setPhoneNumber(request.getPhoneNumber());
        customer.setNameCustomer(request.getName());
        customer.setAddressCustomer(request.getAddress());

        customerRepository.save(customer);
        return customerMapper.toCustomerResponse(customer);
    }
    @Override
    public void deleteCustomer(Long id) {
        if (!customerRepository.existsById(id)) {
            throw new AppException(ErrorCode.CUSTOMER_NOT_EXIST);
        }
        customerRepository.deleteById(id);
    }

    @Override
    public CustomerResponse viewCustomer(Long id) {
        Customer customer = customerRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.CUSTOMER_NOT_EXIST));
        return customerMapper.toCustomerResponse(customer);
    }
    @Override
    public List<CustomerResponse> getAllCustomers() {
        List<Customer> customers = customerRepository.findAll();
        return customers.stream()
                .map(customerMapper::toCustomerResponse)
                .collect(Collectors.toList());
    }
}
