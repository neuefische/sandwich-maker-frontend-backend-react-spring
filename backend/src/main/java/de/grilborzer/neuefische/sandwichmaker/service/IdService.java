package de.grilborzer.neuefische.sandwichmaker.service;

import org.springframework.stereotype.Service;
import java.util.UUID;

@Service
public class IdService {

    public String generateID(){
        return UUID.randomUUID().toString();
    }
}
