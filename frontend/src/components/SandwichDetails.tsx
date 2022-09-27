import "./SandwichDetails.css"
import {Sandwich} from "../model/Sandwich";

type SandwichDetailsProps = {
    sandwich: Sandwich;
    deleteSandwich: (id: string) => void; // Type ist: Eine Methode, die einen String als Parameter hat und void als return
}

export default function SandwichDetails(props: SandwichDetailsProps) {

    return (
        <div className={"sandwich-card"}>
            <button onClick={() => props.deleteSandwich(props.sandwich.id)}>X</button>

            <p className="name">{props.sandwich.name}</p>
            <p className="left-side">Bullete: </p><p>{props.sandwich.patty} </p>
            <p className="left-side">Anzahl von Bulleten: </p><span>{props.sandwich.numberOfPatties} </span>
            <p className="left-side">Brot gegrillt: </p><span>{String(props.sandwich.grilled)} </span>
            <p className="left-side">Extrawünsche: </p><span>{props.sandwich.extraWishes} </span>
        </div>
    )
}