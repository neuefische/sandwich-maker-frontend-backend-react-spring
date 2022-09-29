package de.grilborzer.neuefische.sandwichmaker.service;

import de.grilborzer.neuefische.sandwichmaker.model.Sandwich;
import de.grilborzer.neuefische.sandwichmaker.model.SandwichDTO;
import de.grilborzer.neuefische.sandwichmaker.repository.SandwichRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class SandwichService {

    private final SandwichRepository sandwichRepository;
    private final IdService idService;

    @Autowired
    public SandwichService(SandwichRepository sandwichRepository, IdService idService) {
        this.sandwichRepository = sandwichRepository;
        this.idService = idService;
    }

    public List<Sandwich> getAllSandwiches() {
        return sandwichRepository.findAll();
    }

    public Sandwich saveNewSandwich(SandwichDTO sandwich) {
        Sandwich newSandwich = Sandwich.builder()
                // Ein Service der eine ID generiert
                .id(idService.generateID())
                // Was wir übernehmen
                .name(sandwich.getName())
                .patty(sandwich.getPatty())
                .numberOfPatties(sandwich.getNumberOfPatties())
                .isGrilled(sandwich.isGrilled())
                .extraWishes(sandwich.getExtraWishes())
                // Das bauen wir
                .build();

        return sandwichRepository.saveSandwich(newSandwich);
    }

    public Sandwich getSandwichByID(String id) {
        return sandwichRepository.findByID(id);
    }

    public Sandwich updateSandwich(Sandwich sandwich) {
        if (!sandwichRepository.existsById(sandwich.getId())){
            throw new NoSuchElementException("There is no Element with the requested ID");
        }
        return sandwichRepository.updateSandwich(sandwich);
    }

    public Sandwich deleteSandwichById(String id) {
        return sandwichRepository.deleteSandwichById(id);
    }
}
