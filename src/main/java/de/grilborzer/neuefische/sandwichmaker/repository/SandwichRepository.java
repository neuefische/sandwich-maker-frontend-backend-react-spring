package de.grilborzer.neuefische.sandwichmaker.repository;

import de.grilborzer.neuefische.sandwichmaker.model.Sandwich;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class SandwichRepository {

    Map<String, Sandwich> sandwichMap = new HashMap<>();

    public List<Sandwich> findAll() {
        return new ArrayList<>(sandwichMap.values());
    }

    public Sandwich saveSandwich(Sandwich sandwich) {
        sandwichMap.put(sandwich.getId(), sandwich);
        return sandwich;
    }

    public Sandwich findByID(String id) {
        return sandwichMap.get(id);
    }

    public Sandwich updateSandwich(Sandwich sandwich) {
        sandwichMap.put(sandwich.getId(), sandwich);
        return sandwich;
    }

    public Sandwich deleteSandwichById(String id) {
        return sandwichMap.remove(id);
    }

    public boolean existsById(String id){
        return sandwichMap.containsKey(id);
    }
}
