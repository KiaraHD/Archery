package dog.kiara.archerybackend.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class PlayedGame {

    @Id
    @GeneratedValue
    public int gameID;

    public int scoredPoints;

}
