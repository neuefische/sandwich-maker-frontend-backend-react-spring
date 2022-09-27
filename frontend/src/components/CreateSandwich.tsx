import {ChangeEvent, useState} from "react";

type CreateSandwichProps = {
    addSandwich : (description: string) => void
}

export default function CreateSandwich(props: CreateSandwichProps){

    const [description, setDescription] = useState("")

    const onDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        // Change the description
        setDescription(event.target.value)
    }


    return (
        <div>
            <input onChange={onDescriptionChange} value={description} />
            <button onClick={() => props.addSandwich(description)}>Add</button>
        </div>

    )

}