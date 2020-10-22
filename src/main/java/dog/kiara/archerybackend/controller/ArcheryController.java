package dog.kiara.archerybackend.controller;

import dog.kiara.archerybackend.entity.AppUser;
import dog.kiara.archerybackend.entity.Targets;
import dog.kiara.archerybackend.login.Login;
import dog.kiara.archerybackend.service.ArcheryService;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Controller
public class ArcheryController {


    @Autowired
    private ArcheryService archeryService;

    private Login login = new Login();

    @SneakyThrows
    @GetMapping("/")
    public String defaultPage(Map<String, Object> model) {
        model.put("test", "hallo ich bin ein test!");


//        model.put("test2", archeryService.selectAllUsers());
//        archeryService.saveParocurs()


//        System.out.println(login.resetPassword());


//        AppUser appUser = new AppUser("hans", "Hansen", "Hansenson", "123");

        List<Targets> targets = new ArrayList<>();
        targets.add(new Targets("elch"));
        targets.add(new Targets("maus"));
        targets.add(new Targets("drache"));


        archeryService.saveParcoursToDatabase(targets, "Hansenson", "bogenparcours", "ampfelwang");



        archeryService.saveCreatedUserToDatabase("herbert", "eder", "bert", "Hansenson");

        return "index";

    }

   public void savePoints(boolean is3ArrowRating){


    }

}
