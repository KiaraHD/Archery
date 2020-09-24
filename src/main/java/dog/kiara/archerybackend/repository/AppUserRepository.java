package dog.kiara.archerybackend.repository;

import dog.kiara.archerybackend.entity.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface AppUserRepository extends JpaRepository<AppUser, String> {
//    boolean existingAppUser(int id);
}
