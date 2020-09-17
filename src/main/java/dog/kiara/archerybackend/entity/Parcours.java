package dog.kiara.archerybackend.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Parcours {

    @Id
    @GeneratedValue
    private int parcourId;
    @OneToOne
    private PlayedGame game;
    private String parcourName;
    private String location;
    @OneToMany
    private List<Targets> targets;
    @OneToOne
    private AppUser createdBye;
}
