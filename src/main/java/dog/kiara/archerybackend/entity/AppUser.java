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
}