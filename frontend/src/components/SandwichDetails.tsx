import "./Sandwich.css"
import {Sandwich} from "../model/Sandwich";

type SandwichDetailsProps = {
    sandwich: Sandwich;
    deleteSandwich: (id: string) => void; // Type ist: Eine Methode, die einen String als Parameter hat und void als return
}

export default function SandwichDetails(props: SandwichDetailsProps) {

    console.log(props.sandwich)

    return (
        <div className={"sandwich-card"}>
            <button onClick={() => props.deleteSandwich(props.sandwich.id)}>X</button>

            <p><b>{props.sandwich.name}</b></p>
            <p>Bullete: {props.sandwich.patty} </p>
            <p>Anzahl von Bulleten: {props.sandwich.numberOfPatties} </p>
            <p>Brot gegrillt? {String(props.sandwich.grilled)} </p>
            <p>Extrawünsche: {props.sandwich.extraWishes} </p>
        </div>
    )
}