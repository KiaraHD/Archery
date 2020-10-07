package dog.kiara.archerybackend.controller;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.UserRecord;
import dog.kiara.archerybackend.service.ArcheryService;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Map;

@Controller
public class ArcheryController {

    @Autowired
    private ArcheryService archeryService;

    @SneakyThrows
    @GetMapping("/")
    public String hi(Map<String, Object> model) {
        model.put("test", "hallo ich bin ein test!");

//        archeryService.saveParocurs();

        FirebaseApp backend = FirebaseApp.getInstance("backend");
        FirebaseAuth instance = FirebaseAuth.getInstance(backend);

//        archeryService.saveUserToDatabase();

        return "index";


    }
}
