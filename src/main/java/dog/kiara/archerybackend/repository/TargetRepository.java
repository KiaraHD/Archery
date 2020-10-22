package dog.kiara.archerybackend.repository;

import dog.kiara.archerybackend.entity.Parcours;
import dog.kiara.archerybackend.entity.Targets;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface TargetRepository extends JpaRepository<Targets, String> {

    @Query(value = "select * from targets t where t.target_id = :target_id", nativeQuery = true)
    List<Parcours> getTargetById(int target_id);

    @Query(value = "select * from targets t where t.parcpur_parcour_id = :parcour_id", nativeQuery = true)
    List<Parcours> findTargetsByParcour(int parcour_id);
}
