package dog.kiara.archerybackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
public class APIController {

    @GetMapping("/api/")
    public String test() {
        return "test";
    }


}
