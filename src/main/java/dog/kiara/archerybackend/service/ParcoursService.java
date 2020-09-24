package dog.kiara.archerybackend.service;

import dog.kiara.archerybackend.entity.AppUser;
import dog.kiara.archerybackend.entity.Parcours;
import dog.kiara.archerybackend.repository.AppUserRepository;
import dog.kiara.archerybackend.repository.ParcoursRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ParcoursService {

    @Autowired
    private ParcoursRepository parcoursRepository;

    public List<Parcours> selectAllParcours() {
        return parcoursRepository.findAll();
    }
}
