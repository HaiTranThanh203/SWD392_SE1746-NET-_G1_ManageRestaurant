package SWD392.G1.RestaurantManager.demo.service.impl;

import SWD392.G1.RestaurantManager.demo.dto.response.CustomerResponse;
import SWD392.G1.RestaurantManager.demo.dto.resquest.ScheduleRequest;
import SWD392.G1.RestaurantManager.demo.entity.Customer;
import SWD392.G1.RestaurantManager.demo.entity.RestaurantTable;
import SWD392.G1.RestaurantManager.demo.entity.Schedule;
import SWD392.G1.RestaurantManager.demo.entity.ScheduleTable;
import SWD392.G1.RestaurantManager.demo.enums.SCHEDULE_STATUS;
import SWD392.G1.RestaurantManager.demo.exception.AppException;
import SWD392.G1.RestaurantManager.demo.exception.ErrorCode;
import SWD392.G1.RestaurantManager.demo.mapper.CustomerMapper;
import SWD392.G1.RestaurantManager.demo.mapper.ScheduleMapper;
import SWD392.G1.RestaurantManager.demo.repository.CustomerRepository;
import SWD392.G1.RestaurantManager.demo.repository.IScheduleRepository;
import SWD392.G1.RestaurantManager.demo.repository.RestaurantTableRepository;
import SWD392.G1.RestaurantManager.demo.service.CustomerService;
import SWD392.G1.RestaurantManager.demo.service.IScheduleService;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ScheduleServiceImpl implements IScheduleService {

    @Autowired
    IScheduleRepository scheduleRepository;
    @Autowired
    RestaurantTableRepository tableRepository;
    @Autowired
    ScheduleMapper scheduleMapper;
    @Autowired
    CustomerService customerService;
    @Autowired
    CustomerRepository customerRepository;
    @Autowired
    CustomerMapper customerMapper;
    // @Autowired
    // IScheduleTableRepository scheduleTableRepository;

    @Override
    public String createSchedule(ScheduleRequest request) {
        LocalTime time = LocalTime.parse(request.getTime());
        // List<ScheduleTable> scheduleTables = this.scheduleTableRepository.findAll();
        // for(ScheduleTable st : scheduleTables) {
        //     var table = st.getTable();
        //     if(st.getSchedule().getBookDate().equals(request.getBookedDate()) && time.isBefore(st.getSchedule().getTime().plusMinutes(15)))
        //         return "No available table!";
        //     if(request.getTables().contains(table.getId()))
        //         return "Table " + table.getId() + " was booked! Please Selected Another!";
        // }
        // for (Long tableId : request.getTables()) {
        //     boolean isBooked = !this.scheduleRepository
        //             .findSchedulesByIdAndTimeAndBookDateAndStatus(tableId, request.getBookedDate(), time, time.plusMinutes(30))
        //             .isEmpty();
        //     if (isBooked) {
        //         RestaurantTable booked = tableRepository.findById(tableId).orElseThrow(
        //                 () -> new AppException(ErrorCode.NOT_EXIST));
        //         return "Bàn " + booked.getDescription() + " đã được đặt,  vui lòng chọn bàn khác hoặc khung giờ khác !";
        //     }
        // }
        if (ValidateScheduleDetails(request)) {
            boolean haveCustomer = false;
            Schedule schedule = this.scheduleMapper.toSchedule(request);
            List<CustomerResponse> responses = this.customerService.getAllCustomers();
            for (CustomerResponse response : responses) {
                Customer customer = this.customerMapper.toCustomer(response);
                if (customer.getPhoneNumber().equals(request.getCustomerPhone())) {
                    schedule.setCustomer(customer);
                    haveCustomer = true;
                }
            }
            if (!haveCustomer) {
                Customer newCustomer = new Customer();
                newCustomer.setNameCustomer(request.getCustomerName());
                newCustomer.setPhoneNumber(request.getCustomerPhone());
                newCustomer = customerRepository.save(newCustomer);
                schedule.setCustomer(newCustomer);
            }
            schedule.setBookDate(request.getBookedDate());
            schedule.setTime(time);
            schedule.setStatus(SCHEDULE_STATUS.PENDING.toString());
            schedule.setDeposit(request.getDeposit());
            schedule.setNumberOfCustomers(request.getNumbersOfCustomer());
            scheduleRepository.save(schedule);
            return "Reservation Created Successfully!";
        }
        return "Please Select Time After Now!";
    }

    private boolean ValidateScheduleDetails(ScheduleRequest request) {
        if (request.getBookedDate().isBefore(LocalDate.now()))
            return false;
        LocalTime time = LocalTime.parse(request.getTime());
        if (request.getBookedDate().equals(LocalDate.now()) && time.isBefore(LocalTime.now()))
            return false;
        return true;
    }
}
