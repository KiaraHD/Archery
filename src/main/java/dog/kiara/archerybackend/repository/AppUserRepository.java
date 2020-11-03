package dog.kiara.archerybackend.repository;

import com.google.api.gax.paging.Page;
import dog.kiara.archerybackend.entity.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface AppUserRepository extends JpaRepository<AppUser, String> {


    @Query(value = "select * from app_user a where a.nickname = :nickname", nativeQuery = true)
    List<AppUser> findAppUsersByNickname(String nickname);

    @Query(value = "select * from app_user a where a.user_id = :user_id", nativeQuery = true)
    List<AppUser> findAppUsersById(int user_id);

    @Query(value = "select * from app_user a where created_by  = :loggedinUser", nativeQuery = true)
    List<AppUser> findUserByCreator(int loggedinUser);

    boolean existsByNickname(String nickname);

    List<AppUser> findAllByCreatedByIsNull();

}

