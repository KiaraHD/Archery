package dog.kiara.archerybackend.controller;

import dog.kiara.archerybackend.entity.AppUser;
import dog.kiara.archerybackend.entity.Parcours;
import dog.kiara.archerybackend.repository.ParcoursRepository;
import dog.kiara.archerybackend.service.LoginService;
import dog.kiara.archerybackend.service.ArcheryService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.*;

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
    public String defaultPage(Map<String, Object> model, HttpServletRequest request) {
        String page = getLogin(model, request, "index");
        if (model.containsKey("user")) {
            AppUser user = (AppUser) model.get("user");
            if (user != null) {
                List<AppUser> usersByCreatorId = archeryService.getUsersByCreatorId(user.getUserId());
                model.put("list", usersByCreatorId == null ? Collections.EMPTY_LIST : usersByCreatorId);
                List<Parcours> parcoursByUser = archeryService.getParcoursByUser(user.getUserId());
                model.put("parcours", parcoursByUser == null ? Collections.EMPTY_LIST : parcoursByUser);
            }
        }
        return page;
    }

    @SneakyThrows
    @GetMapping("/parcours")
    public String parcours(Map<String, Object> model, HttpServletRequest request) {
        model.put("service", archeryService);
        String parcours = getLogin(model, request, "parcours");
        if (model.containsKey("user")) {
            AppUser user = (AppUser) model.get("user");
            if (user != null) {
                List<Parcours> parcoursByUser = archeryService.getParcoursByUser(user.getUserId());
                model.put("parcours", parcoursByUser == null ? Collections.EMPTY_LIST : parcoursByUser);
            }
        }
        return parcours;
    }

    @GetMapping("/addparcour")
    public RedirectView login(@RequestParam String name, @RequestParam String location, @RequestParam int number, Map<String, Object> model, HttpServletRequest request) {
        System.out.println("name = " + name);
        System.out.println("location = " + location);
        AppUser appUserFromCookie = getAppUserFromCookie(model, request.getSession());
        if (appUserFromCookie != null) {
            archeryService.createParcour(name, location, number, appUserFromCookie);
        }

        return new RedirectView("/");
    }

    @SneakyThrows
    @GetMapping("/account")
    public String account(Map<String, Object> model, HttpServletRequest request) {
        AppUser appUserFromCookie = getAppUserFromCookie(model, request.getSession());
        if (appUserFromCookie == null) {
            return "account";
        }

        return "account";
    }

    @SneakyThrows
    @GetMapping("/register")
    public String register(Map<String, Object> model, HttpServletRequest request) {
        return "register";
    }

    // Matthew cool

    @GetMapping("/registerUser")
    public RedirectView registerUser(@RequestParam String firstName, @RequestParam String lastName, @RequestParam String password, @RequestParam String username, Map<String, Object> model, HttpServletRequest request) {
        boolean b = archeryService.userExists(username);
        System.out.println("b = " + b);
        if (!b) {
            archeryService.createUser(firstName, lastName, username, password);
            return new RedirectView("/login?username=" + username + "&password=" + password);
        } else {
            return new RedirectView("/register");
        }
    }

    @GetMapping("/registerTempUser")
    public RedirectView registerUser(@RequestParam String firstName, @RequestParam String lastName, @RequestParam String username, Map<String, Object> model, HttpServletRequest request) {
        boolean b = archeryService.userExists(username);
        AppUser appUser = getAppUserFromCookie(model, request.getSession());
        System.out.println("b = " + b);
        if (appUser != null && !b) {
            archeryService.saveCreatedUserToDatabase(firstName, lastName, username, appUser.getNickname());
        }
        return new RedirectView("/users");
    }

    @SneakyThrows
    @GetMapping("/users")
    public String users(Map<String, Object> model, HttpServletRequest request) {
        // getLogin();
        return getLogin(model, request, "users");
    }

    @SneakyThrows
    @GetMapping("/start")
    public String start(Map<String, Object> model, HttpServletRequest request) {
        // getLogin();
        model.put("username", "");
        model.put("password", "");
        return "start";
    }

    private String getLogin(Map<String, Object> model, HttpServletRequest request, String normalPage) {
        // model.put("service", archeryService);
        AppUser appUserFromCookie = getAppUserFromCookie(model, request.getSession());
        if (appUserFromCookie == null) {
            return "start";
        }
        return normalPage;
    }

    @GetMapping("/login")
    public RedirectView login(Map<String, Object> model, @RequestParam(required = true) String username,
                              @RequestParam(required = true) String password, HttpServletRequest request) {
        AppUser appUserFromCookie = getAppUserFromCookie(model, request.getSession());
        if (appUserFromCookie != null) {
            model.put("name", appUserFromCookie.getNickname());
            return new RedirectView("/");
        }

        AppUser appUser = loginService.loginAppuser(username, password);
        if (appUser == null) {
            model.put("name", "falsches passwort");
            return new RedirectView("/start");
        }
        UUID uuid = UUID.randomUUID();

        HttpSession session = request.getSession();
        session.setAttribute("user", uuid.toString());

        userMap.put(uuid.toString(), appUser);
        model.put("name", appUser.getNickname());
        return new RedirectView("/");
    }

    @GetMapping("/logout")
    public String logout(HttpServletRequest request, HttpServletResponse response) {

        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();
        }

        return "start";
    }

    private AppUser getAppUserFromCookie(Map<String, Object> model, HttpSession session) {
        Object user = session.getAttribute("user");
        if (user == null) return null;
        AppUser appUser = userMap.get(user.toString());
        if (appUser == null) return null;
        model.put("user", appUser);
        model.put("username", appUser.getNickname());
        return appUser;
    }

    public List<Parcours> getAllParcours() {

        return archeryService.selectAllParcours();
    }

}
