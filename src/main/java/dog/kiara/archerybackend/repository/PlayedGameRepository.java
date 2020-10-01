package dog.kiara.archerybackend.repository;

import dog.kiara.archerybackend.entity.Parcours;
import dog.kiara.archerybackend.entity.PlayedGame;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Repository
public interface PlayedGameRepository extends JpaRepository<PlayedGame, String> {

    @Query(value = "select * from played_game p where p.game_id = :game_id", nativeQuery = true)
    List<Parcours> findPlayedGameById(int game_id);
}
