package dog.kiara.archerybackend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Map;

@Controller
public class TestController {

    @GetMapping("/")
    public String hi(Map<String, Object> model) {
        model.put("test", "hallo ich bin ein test!");
        return "index";
    }

}
