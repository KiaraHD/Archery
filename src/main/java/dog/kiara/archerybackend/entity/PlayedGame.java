package dog.kiara.archerybackend.entity;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class PlayedGame {

    @Id
    @GeneratedValue
    @GenericGenerator(strategy = "increment",name = "increment")
    public int gameID;

    public int scoredPoints;

}
