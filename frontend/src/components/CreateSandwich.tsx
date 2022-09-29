import {ChangeEvent, FormEvent, useState} from "react";
import {Sandwich} from "../model/Sandwich";
import "./CreateSandwich.css"

type CreateSandwichProps = {
    addSandwich: (description: Sandwich) => void
}

export default function CreateSandwich(props: CreateSandwichProps) {

    const emptySandwichPlaceholder: Sandwich = {
        id: "",
        name: "",
        patty: "",
        numberOfPatties: 0,
        grilled: false,
        extraWishes: ""
    }

    const [sandwich, setSandwich] = useState(emptySandwichPlaceholder)

    /*
    * TODO: Aufgabe 3 -> Erstelle eine handleSubmit(event: FormEvent<HTMLFormElement>) Funktion,
    *  die props.addSandwich aufruft und das neue Sandwich-Objekt als Parameter übergibt
    **/
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        // Bitte NICHT aktualisiert
        event.preventDefault()

        props.addSandwich(sandwich)
    }

    /*
    * TODO:  Aufgabe 2 -> Erstelle eine handleChange(event: ChangeEvent<HTMLInputElement>) Funktion,
    *  die Änderungen an der Form übernimmt und den Sandwich-State aktualisiert
    **/
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const inputValue = event.target.value
        const nameOfTheInputThatChanged = event.target.name

        setSandwich(
            (prevSandwich) => ({
                ...prevSandwich,
                [nameOfTheInputThatChanged]:
                    event.target.type === "checkbox"
                        ? event.target.checked
                        : event.target.value
            })
        )
    }

    /*
    * TODO: Aufgabe 1 -> Erstelle eine <form> mit der man alle Daten eines Burgers angeben kann
    **/
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name der Burgerkreation
                    <input
                        name="name"
                        type="text"
                        value={sandwich.name}
                        placeholder="Big Boss"
                        onChange={handleChange}
                    />
                </label>
                <br/>

                <label>
                    Wunsch-Patty
                    <input
                        name="patty"
                        type="text"
                        value={sandwich.patty}
                        placeholder="Vegane Rinderbulette"
                        onChange={handleChange}
                    />
                    <br/>
                </label>

                <label>
                    Anzahl an Patties
                    <input
                        name="numberOfPatties"
                        type="number"
                        value={sandwich.numberOfPatties}
                        onChange={handleChange}
                    />
                    <br/>
                </label>

                <label>
                    Mit oder ohne gegrillt?
                    <input
                        name="grilled"
                        type="checkbox"
                        checked={sandwich.grilled}
                        onChange={handleChange}
                    />
                </label>

                <br/>
                <button type={"submit"}>Bestellung hinzufügen</button>
            </form>
        </div>
    )

    /* TODO: Bonusaufgabe 1 -> Füge dem Projekt Routing hinzu (click auf ein Sandwich, öffnet die Sandwich-Details wie bei Rick&Morty)  */
    /* TODO: Bonusaufgabe 2 -> Style das Projekt nach deinen Wünschen  */
    /* TODO: Bonusaufgabe 3 -> Gib dem Sandwich-Objekt mehr Attribute (im Frontend + Backend)  */
}