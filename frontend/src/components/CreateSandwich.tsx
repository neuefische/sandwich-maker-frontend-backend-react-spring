import {ChangeEvent, useState} from "react";
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

    const onDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        // Change the description
        setDescription(event.target.value)
    }


    return (
        <div>
            <input onChange={onDescriptionChange} value={description} />
            <button onClick={() => props.addSandwich(description)}>Add</button>
            {/*<input onChange={onDescriptionChange} value={sandwich} />*/}
            <button onClick={() => props.addSandwich(sandwich)}>Add</button>
        </div>

    )

}