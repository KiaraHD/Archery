package dog.kiara.archerybackend.controller;

import dog.kiara.archerybackend.login.Login;
import dog.kiara.archerybackend.service.ArcheryService;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Map;

@Controller
public class ArcheryController {

    @Autowired
    private ArcheryService archeryService;

    private Login login = new Login();

    @SneakyThrows
    @GetMapping("/")
    public String hi(Map<String, Object> model) {
        model.put("test", "hallo ich bin ein test!");


//        model.put("test2", archeryService.selectAllUsers());
//        archeryService.saveParocurs()


//        System.out.println(login.resetPassword());


        archeryService.saveUserToDatabase("hans", "Hansen", "Hansenson", "123");

        login.loginAppuser("hans", "123");

        return "index";

    }
}
