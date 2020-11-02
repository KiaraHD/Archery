package dog.kiara.archerybackend.service;

import dog.kiara.archerybackend.entity.AppUser;
import dog.kiara.archerybackend.service.ArcheryService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Base64;

@Getter
@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class LoginService {

    private AppUser loggedInUser;

    private final ArcheryService archeryService;

    public AppUser loginAppuser(String username, String password) {

        System.out.println(archeryService == null);

        AppUser foundUser = archeryService.searchUserByNickname(username);

        if (foundUser != null && encodePassword(password).equals(foundUser.getPassword())) {

            return foundUser;
        }
        return null;
    }

    private String encodePassword(String password) {
        return Base64.getEncoder().encodeToString(password.getBytes());
    }


    private void loginUser(AppUser user) {

        loggedInUser = user;
        System.out.println("successfully logged in");
    }

    public void logOut() {

        loggedInUser = null;
    }
}