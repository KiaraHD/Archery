package dog.kiara.archerybackend.service;

import dog.kiara.archerybackend.entity.AppUser;
import dog.kiara.archerybackend.entity.PlayedGame;
import dog.kiara.archerybackend.repository.AppUserRepository;
import dog.kiara.archerybackend.repository.PlayedGameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayedGameService {

    @Autowired
    private PlayedGameRepository playedGameRepository;

    public List<PlayedGame> selectAllPlayedGames() {
        return playedGameRepository.findAll();
    }
}
