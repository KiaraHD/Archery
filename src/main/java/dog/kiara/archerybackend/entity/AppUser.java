package dog.kiara.archerybackend.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Data
@Entity
public class AppUser {

    @Id
    @GeneratedValue
    private int userId;
    @OneToOne
    private PlayedGame game;
    private String firstName;
    private String lastName;
    private String nickname;
    private Integer createdBy;

}
