import SandwichDetails from "./SandwichDetails";
import {Sandwich} from "../model/Sandwich";
import "./SandwichOverview.css"

type SandwichOverviewProps = {
    sandwiches : Sandwich[];
    deleteSandwich : (id: string) => void;
}

export default function SandwichOverview(props : SandwichOverviewProps){

    return (
        <div className="menu-list">
            {props.sandwiches.map((sandwich) =>
                <SandwichDetails key={sandwich.id} sandwich={sandwich} deleteSandwich={props.deleteSandwich} /> ) }
        </div>
    )

}