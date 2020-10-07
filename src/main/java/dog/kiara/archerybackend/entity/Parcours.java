package dog.kiara.archerybackend.entity;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Parcours {

    @Id
    @GeneratedValue(generator = "increment", strategy = GenerationType.SEQUENCE)
    @GenericGenerator(strategy = "increment",name = "increment")
    private Integer parcourId;
    @OneToOne
    private PlayedGame game;
    private String parcourName;
    private String location;
    @OneToMany
    private List<Targets> targets;
    @OneToOne
    private AppUser createdBy;
}
