package SWD392.G1.RestaurantManager.demo.custom;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import SWD392.G1.RestaurantManager.demo.entity.RestaurantTable;
import SWD392.G1.RestaurantManager.demo.repository.RestaurantTableRepository;

@Component
public class DatabaseSeeder implements CommandLineRunner {
    @Autowired RestaurantTableRepository tableRepository;

    @Override
    public void run(String... args) throws Exception {
        // // Xóa dữ liệu cũ (nếu cần)
        // tableRepository.deleteAll();

        // // Thêm dữ liệu mẫu
        // RestaurantTable table1 = new RestaurantTable(4, "Bàn nhỏ, 4 ghế", false);
        // RestaurantTable table2 = new RestaurantTable(6, "Bàn trung bình, 6 ghế", false);
        // RestaurantTable table3 = new RestaurantTable(8, "Bàn lớn, 8 ghế", false);
        // RestaurantTable table4 = new RestaurantTable(10, "Bàn dài, 10 ghế", false);
        // RestaurantTable table5 = new RestaurantTable(2, "Bàn tròn nhỏ, 2 ghế", false);
        // RestaurantTable table6 = new RestaurantTable(12, "Bàn hội nghị, 12 ghế", false);

        // // Lưu dữ liệu vào database
        // tableRepository.save(table1);
        // tableRepository.save(table2);
        // tableRepository.save(table3);
        // tableRepository.save(table4);
        // tableRepository.save(table5);
        // tableRepository.save(table6);

        // System.out.println("Database has been seeded with table data.");
    }
    
}
