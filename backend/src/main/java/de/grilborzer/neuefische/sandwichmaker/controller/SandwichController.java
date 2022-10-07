package de.grilborzer.neuefische.sandwichmaker.controller;

import de.grilborzer.neuefische.sandwichmaker.model.Sandwich;
import de.grilborzer.neuefische.sandwichmaker.model.SandwichDTO;
import de.grilborzer.neuefische.sandwichmaker.service.SandwichService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/sandwich")
public class SandwichController {

    private final SandwichService sandwichService;

    @Autowired
    public SandwichController(SandwichService sandwichService) {
        this.sandwichService = sandwichService;
    }

    @GetMapping
    public List<Sandwich> getAllSandwiches() {
        return sandwichService.getAllSandwiches();
    }

    @PostMapping
    public Sandwich saveSandwich(@RequestBody SandwichDTO sandwichDTO) {
        return sandwichService.saveNewSandwich(sandwichDTO);
    }

    @GetMapping(path = "/{id}")
    public Sandwich getSandwichByID(@PathVariable String id) {
        return sandwichService.getSandwichByID(id);
    }

    @PutMapping(path = "/{id}")
    public Sandwich updateTodo(@PathVariable String id, @RequestBody Sandwich sandwichToUpdate) {
        return sandwichService.updateSandwich(sandwichToUpdate);
    }

    @DeleteMapping(path = "/{id}")
    public Sandwich deleteTodoById(@PathVariable String id) {
        return sandwichService.deleteSandwichById(id);
    }
}
