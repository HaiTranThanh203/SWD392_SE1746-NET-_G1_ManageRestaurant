package SWD392.G1.RestaurantManager.demo.mapper;

import SWD392.G1.RestaurantManager.demo.dto.response.AccountResponse;
import SWD392.G1.RestaurantManager.demo.dto.resquest.AccountRequest;
import SWD392.G1.RestaurantManager.demo.entity.Account;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface AccountMapper {
    @Mapping(target = "role",ignore = true)
    Account toAccount(AccountRequest req);
    AccountResponse toAccountResponse(Account account);
}
