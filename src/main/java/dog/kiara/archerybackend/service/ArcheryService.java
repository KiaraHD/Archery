package dog.kiara.archerybackend.service;

import dog.kiara.archerybackend.entity.AppUser;
import dog.kiara.archerybackend.entity.Parcours;
import dog.kiara.archerybackend.entity.PlayedGame;
import dog.kiara.archerybackend.entity.Targets;
import dog.kiara.archerybackend.repository.AppUserRepository;
import dog.kiara.archerybackend.repository.ParcoursRepository;
import dog.kiara.archerybackend.repository.PlayedGameRepository;
import dog.kiara.archerybackend.repository.TargetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.HTML;
import java.util.ArrayList;
import java.util.List;

@Service
public class ArcheryService {

    @Autowired
    private AppUserRepository appUserRepository;

    @Autowired
    private ParcoursRepository parcoursRepository;

    @Autowired
    private PlayedGameRepository playedGameRepository;

    @Autowired
    private TargetRepository targetRepository;

    public List<AppUser> selectAllUsers() {
        return appUserRepository.findAll();
    }

    public AppUser searchByNickname(String nickname) {

        return appUserRepository.findAppUsersByNickname(nickname).get(0);
    }

    public void saveUserToDatabase(String nickname, String firstname, String lastname) {

        AppUser appUser = new AppUser(firstname, lastname, nickname);

        appUserRepository.saveAndFlush(appUser);
    }


    public List<Parcours> selectAllParcours() {
        return parcoursRepository.findAll();
    }

//    public void saveParocurs() {
//
//        Parcours parcours = new Parcours();
//        parcours.setLocation("ampfelwang");
//        parcours.setParcourName("Bogenschießen");
//        parcoursRepository.saveAndFlush(parcours);
//
//       Parcours parcours1 = parcoursRepository.findParcoursByName("ampfelwang").get(0);
//
//        List<Targets> targets = new ArrayList<>();
//        targets.add(new Targets("elch", parcours1));
//        targets.add(new Targets("maus", parcours1));
//        targets.add(new Targets("drache", parcours));
//    }

    public List<PlayedGame> selectAllPlayedGames() {
        return playedGameRepository.findAll();
    }

    public List<Targets> selectAllTargets() {
        return targetRepository.findAll();
    }
}

