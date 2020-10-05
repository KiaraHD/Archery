package dog.kiara.archerybackend.service;

import com.fasterxml.classmate.AnnotationConfiguration;
import dog.kiara.archerybackend.SessionFactoryBuilder;
import dog.kiara.archerybackend.entity.AppUser;
import dog.kiara.archerybackend.repository.AppUserRepository;
import lombok.RequiredArgsConstructor;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppUserService {

    @Autowired
    private AppUserRepository appUserRepository;

    public List<AppUser> selectAllUsers() {
        return appUserRepository.findAll();
    }

    public void searchByNickname() {

        System.out.println("AppuserByNickname -> " + appUserRepository.findAppUsersByNickname("hansi").get(0).getFirstName());
    }

    public void saveUserToDatabase() {

        AppUser appUser = new AppUser();
//        appUser.setUserId(1);

        appUser.setFirstName("Franz");
        appUser.setLastName("Müller");
        appUser.setNickname("Franzi");
        SessionFactory factory = SessionFactoryBuilder.getSessionFactory();
        Session session = factory.openSession();
        session.saveOrUpdate(appUser);
    }
}

