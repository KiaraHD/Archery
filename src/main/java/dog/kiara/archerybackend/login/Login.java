package dog.kiara.archerybackend.login;


import dog.kiara.archerybackend.entity.AppUser;
import dog.kiara.archerybackend.repository.AppUserRepository;
import dog.kiara.archerybackend.service.ArcheryService;
import org.springframework.beans.factory.annotation.Autowired;

public class Login {

    private AppUser loggedInUser;

    @Autowired
    ArcheryService archeryService;

    public void loginAppuser(String username, String password) {

      AppUser foundUser = archeryService.searchUserByNickname(username);

      if (password.equals(foundUser.getPassword())){

          loginUser(foundUser);
      }
    }


    private void loginUser(AppUser user){

    loggedInUser = user;
        System.out.println("successfully logged in");
    }

    public void logOut(){

        loggedInUser = null;
    }
}