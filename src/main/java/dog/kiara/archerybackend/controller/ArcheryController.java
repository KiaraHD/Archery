package dog.kiara.archerybackend.controller;

import dog.kiara.archerybackend.entity.AppUser;
import dog.kiara.archerybackend.entity.Parcours;
import dog.kiara.archerybackend.service.LoginService;
import dog.kiara.archerybackend.service.ArcheryService;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Controller
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class ArcheryController {

    private final static Map<String, AppUser> userMap = new HashMap<>();

    private final ArcheryService archeryService;
    private final LoginService loginService;

    @SneakyThrows
    @GetMapping("/")
    public String hi(HttpServletRequest request) {

        AppUser appUserFromCookie = getAppUserFromCookie(request.getSession());
        if (appUserFromCookie == null) {
            return "index";
        }

//        model.put("name", appUserFromCookie.getPassword());
        return "index";
    }

    @GetMapping("/login")
    public String login(Map<String, Object> model, @RequestHeader(defaultValue = "hans", required = false) String username, @RequestHeader(defaultValue = "123", required = false) String password,
                        HttpServletRequest request) {
        AppUser appUserFromCookie = getAppUserFromCookie(request.getSession());
        if (appUserFromCookie != null) {
            model.put("name", appUserFromCookie.getNickname());
            return "index.html";
        }

        AppUser appUser = loginService.loginAppuser(username, password);
        if (appUser == null) {
            model.put("name", "falsches passwort");
            return "index.html";
        }
        UUID uuid = UUID.randomUUID();

        HttpSession session = request.getSession();
        session.setAttribute("user", uuid.toString());

        userMap.put(uuid.toString(), appUser);
        model.put("name", appUser.getNickname());
        return "index.html";
    }

    @GetMapping("/logout")
    public String logout(HttpServletRequest request, HttpServletResponse response) {

       HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();
        }

        return "index.html";
    }

    private AppUser getAppUserFromCookie(HttpSession session) {
        Object user = session.getAttribute("user");
        if (user == null) return null;
        return userMap.get(user.toString());
    }

    public List<Parcours> getAllParcours(){

        return archeryService.selectAllParcours();
    }

}
