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

    public AppUser searchUserByNickname(String nickname) {

        return appUserRepository.findAppUsersByNickname(nickname).get(0);
    }

    public void saveUserToDatabase(String nickname, String firstname, String lastname, String password) {

        AppUser appUser = new AppUser(firstname, lastname, nickname, password);

        appUserRepository.saveAndFlush(appUser);
    }


    public void saveParcoursToDatabase(List<Targets> targetList, String createdby, String name, String location) {


        Parcours parcours = new Parcours(name, location, appUserRepository.findAppUsersByNickname(createdby).get(0), targetList);
        parcoursRepository.saveAndFlush(parcours);
    }

    public List<Parcours> selectAllParcours() {
        return parcoursRepository.findAll();
    }

    public void saveCreatedUserToDatabase(String firstname, String lastname, String nickname, String createdBy) {

        Integer createdByID = appUserRepository.findAppUsersByNickname(createdBy).get(0).getUserId();

        AppUser createdUser = new AppUser(firstname, lastname, nickname, createdByID);

        appUserRepository.saveAndFlush(createdUser);

    }

    public List<PlayedGame> selectAllPlayedGames() {
        return playedGameRepository.findAll();
    }

    public List<Targets> selectAllTargets() {
        return targetRepository.findAll();
    }

    public void saveAverage(int scoredPoints) {

        PlayedGame playedGame = new PlayedGame(scoredPoints);

        playedGameRepository.saveAndFlush(playedGame);
    }

    /*Area:

    1 - body
    2 - Kill
    3 - inner kill

     */

    public int calculate3ArrowRating(int numberOfShots, int area) {

        if (numberOfShots == 1) {
            if (area == 1) {
                return 16;
            } else if (area == 2) {
                return 18;
            } else if (area == 3) {
                return 20;
            }
        } else if (numberOfShots == 2) {
            if (area == 1) {
                return 10;
            } else if (area == 2) {
                return 12;
            } else if (area == 3) {
                return 14;
            }

        } else if (numberOfShots == 3) {
            if (area == 1) {
                return 4;
            } else if (area == 2) {
                return 6;
            } else if (area == 3) {
                return 8;
            }

        }
        return 0;
    }


    public int calculate2ArrowRating(int area) {

        if (area == 3) {

            return 5;
        } else if (area == 2) {

            return 8;
        } else if (area == 1) {

            return 10;
        }
        return 0;
    }
}