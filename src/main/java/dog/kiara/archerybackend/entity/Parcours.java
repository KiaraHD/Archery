package dog.kiara.archerybackend.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
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
    @Cascade({CascadeType.ALL})
    private List<Targets> targets;
    @OneToOne
//    @Cascade({CascadeType.ALL})
    private AppUser createdBy;


    public Parcours(String name, String location,AppUser createdBy ,List<Targets> targetList) {

    this.parcourName = name;
    this.location = location;
    this.createdBy = createdBy;
    this.targets = targetList;
    }

    public Parcours() {

    }
}
