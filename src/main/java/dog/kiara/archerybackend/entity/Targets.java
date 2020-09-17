package dog.kiara.archerybackend.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Targets {

    @Id
    @GeneratedValue
    private int targetId;

    @ManyToOne
    private Parcours parcour;

    private String targetName;
}
