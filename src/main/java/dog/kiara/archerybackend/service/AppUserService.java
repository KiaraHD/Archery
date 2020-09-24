package dog.kiara.archerybackend.service;

import dog.kiara.archerybackend.entity.AppUser;
import dog.kiara.archerybackend.repository.AppUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppUserService {

    @Autowired
    private AppUserRepository appUserRepository;

    public List<AppUser> selectAllUsers() {
        return appUserRepository.findAll();
    }
}

