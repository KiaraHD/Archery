package dog.kiara.archerybackend.service;

import dog.kiara.archerybackend.entity.AppUser;
import dog.kiara.archerybackend.repository.AppUserRepository;
import dog.kiara.archerybackend.entity.Targets;
import dog.kiara.archerybackend.repository.TargetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TargetService {

    @Autowired
    private TargetRepository targetRepository;

    public List<Targets> selectAllTargets() {
        return targetRepository.findAll();
    }
}
