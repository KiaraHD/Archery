package dog.kiara.archerybackend.controller;

import dog.kiara.archerybackend.entity.AppUser;
import dog.kiara.archerybackend.repository.AppUserRepository;
import dog.kiara.archerybackend.service.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Controller
public class ArcheryController {

    @Autowired
    private AppUserService appUserService;

    @GetMapping("/")
    public String hi(Map<String, Object> model) {
        model.put("test", "hallo ich bin ein test!");

        List<AppUser> appUserList = appUserService.selectAllUsers();

        for (int i = 0; i < appUserList.size(); i++) {

            System.out.println("appuser: " + appUserList.get(i).getFirstName());
        }

        appUserService.saveUserToDatabase();

        appUserService.searchByNickname();

        System.out.println();
//        appUserService.list();
        return "index";


    }
}
