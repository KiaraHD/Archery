package dog.kiara.archerybackend.repository;

import dog.kiara.archerybackend.entity.PlayedGame;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


@Repository
public interface PlayedGameRepository extends JpaRepository<PlayedGame, String> {
//    boolean existingGame(int id);
}
