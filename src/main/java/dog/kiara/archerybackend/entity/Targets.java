package dog.kiara.archerybackend.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
public class Targets {

    @Id
    @GeneratedValue(generator = "increment", strategy = GenerationType.SEQUENCE)
    @GenericGenerator(strategy = "increment",name = "increment")
    private int targetId;

    @ManyToOne
    private Parcours parcour;

    private String targetName;

    public Targets(){


    }

    public Targets(String targetName, Parcours parcour) {

        this.targetName = targetName;
        this.parcour = parcour;
    }
}
