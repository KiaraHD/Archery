package dog.kiara.archerybackend.entity;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Data
@Entity
public class AppUser {

    @Id
   @GeneratedValue(generator = "increment", strategy = GenerationType.SEQUENCE)
    @GenericGenerator(strategy = "increment",name = "increment")
    private Integer userId = null;
    @OneToOne
    private PlayedGame game;
    private String firstName;
    private String lastName;
    private String nickname;
    private Integer createdBy;

    public AppUser(String firstName, String lastName, String nickname, Integer createdBy) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.nickname = nickname;
        this.createdBy = createdBy;
    }

    public AppUser() {

    }

    public AppUser(PlayedGame playedGame, String firstName, String lastName, String nickname, Integer createdBy) {

            this.game = playedGame;
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickname = nickname;
        this.createdBy = createdBy;
    }

    public AppUser(String firstname, String lastname, String nickname) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.nickname = nickname;
    }
}