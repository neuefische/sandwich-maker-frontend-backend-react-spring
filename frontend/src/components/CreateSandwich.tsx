import {useState} from "react";
import {Sandwich} from "../model/Sandwich";

type CreateSandwichProps = {
    addSandwich : (description: Sandwich) => void
}

export default function CreateSandwich(props: CreateSandwichProps){

    const emptySandwichPlaceholder: Sandwich = {
        id: "",
        name: "",
        patty: "",
        numberOfPatties: 0,
        grilled: false,
        extraWishes: ""
    }

    const [sandwich, setSandwich] = useState(emptySandwichPlaceholder)

    return (
        <div>
            <button onClick={() => props.addSandwich(sandwich)}>Add</button>
        </div>

    )

}