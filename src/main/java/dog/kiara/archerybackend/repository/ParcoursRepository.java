package dog.kiara.archerybackend.repository;

import dog.kiara.archerybackend.entity.Parcours;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParcoursRepository extends JpaRepository<Parcours, String> {
    boolean existsParcoursById( int id );
}
