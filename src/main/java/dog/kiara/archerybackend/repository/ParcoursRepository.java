package dog.kiara.archerybackend.repository;

import dog.kiara.archerybackend.entity.AppUser;
import dog.kiara.archerybackend.entity.Parcours;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface ParcoursRepository extends JpaRepository<Parcours, String> {

    @Query(value = "select * from parcours p where p.parcour_id = :parcour_id", nativeQuery = true)
    List<Parcours> findParcoursByID(int parcour_id);

    @Query(value = "select * from parcours p where p.parcour_name = :parcour_name", nativeQuery = true)
    List<Parcours> findParcoursByName(String parcour_name);

    @Query(value = "select * from parcours p where p.created_by_user_id = :loggedinUser", nativeQuery = true)
    List<Parcours> findParcoursByCreatedUser(int loggedinUser);

}

