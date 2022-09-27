package de.grilborzer.neuefische.sandwichmaker.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Sandwich {

    private String id;
    private String name;
    private String patty;
    private int numberOfPatties;
    private boolean isGrilled;
    private String extraWishes;
}
