package dog.kiara.archerybackend.controller;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import dog.kiara.archerybackend.service.ArcheryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.io.IOException;
import java.util.Map;

@Controller
public class ArcheryController {

    @Autowired
    private ArcheryService archeryService;

    @GetMapping("/")
    public String hi(Map<String, Object> model) {
        model.put("test", "hallo ich bin ein test!");


//        archeryService.saveParocurs();


//        archeryService.saveUserToDatabase();

        return "index";


    }
}
