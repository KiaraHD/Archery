package dog.kiara.archerybackend.repository;

import dog.kiara.archerybackend.entity.Targets;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface TargetRepository extends JpaRepository<Targets, String> {
//    boolean existingTarget(int id);
}
