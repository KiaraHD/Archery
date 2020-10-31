package dog.kiara.archerybackend.controller;

import dog.kiara.archerybackend.entity.AppUser;
import dog.kiara.archerybackend.entity.Parcours;
import dog.kiara.archerybackend.service.LoginService;
import dog.kiara.archerybackend.service.ArcheryService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
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

    @Getter
    @Setter
    private static String username = "";

    private final ArcheryService archeryService;
    private final LoginService loginService;

    @SneakyThrows
    @GetMapping("/")
    public String defaultPage(HttpServletRequest request) {
        return getLogin(request, "index");
    }

    @SneakyThrows
    @GetMapping("/parcours")
    public String parcours(HttpServletRequest request) {
        AppUser appUserFromCookie = getAppUserFromCookie(request.getSession());
        if (appUserFromCookie == null) {
            return "parcours";
        }

        return "parcours";
    }

    @SneakyThrows
    @GetMapping("/account")
    public String account(HttpServletRequest request) {
        AppUser appUserFromCookie = getAppUserFromCookie(request.getSession());
        if (appUserFromCookie == null) {
            return "account";
        }

        return "account";
    }

    @SneakyThrows
    @GetMapping("/users")
    public String users(HttpServletRequest request) {
        // getLogin();
        return "users";
    }

    @SneakyThrows
    @GetMapping("/start")
    public String start(Map<String, Object> model, HttpServletRequest request) {
        // getLogin();
        model.put("username", "");
        model.put("password", "");
        return "start";
    }

    private String getLogin(HttpServletRequest request, String normalPage) {
        AppUser appUserFromCookie = getAppUserFromCookie(request.getSession());
        if (appUserFromCookie == null) {
            return "start";
        }
        return normalPage;
    }

    @GetMapping("/login")
    public String login(Map<String, Object> model, @RequestHeader(defaultValue = "hans", required = false) String username,
                        @RequestHeader(defaultValue = "123", required = false) String password, HttpServletRequest request) {
        AppUser appUserFromCookie = getAppUserFromCookie(request.getSession());
        if (appUserFromCookie != null) {
            model.put("name", appUserFromCookie.getNickname());
            return "index";
        }

        AppUser appUser = loginService.loginAppuser(username, password);
        if (appUser == null) {
            model.put("name", "falsches passwort");
            return "index";
        }
        UUID uuid = UUID.randomUUID();

        HttpSession session = request.getSession();
        session.setAttribute("user", uuid.toString());

        userMap.put(uuid.toString(), appUser);
        model.put("name", appUser.getNickname());
        return "index";
    }

    @GetMapping("/logout")
    public String logout(HttpServletRequest request, HttpServletResponse response) {

        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();
        }

        return "start";
    }

    private AppUser getAppUserFromCookie(HttpSession session) {
        Object user = session.getAttribute("user");
        if (user == null) return null;
        return userMap.get(user.toString());
    }

    public List<Parcours> getAllParcours() {

        return archeryService.selectAllParcours();
    }

}
