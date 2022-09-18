import { useContext } from "react";
import GlobalContext from "../GlobalContext";
import Tidbit from "./Tidbit";

export default function Tidbits(){

    const { tidbits } = useContext(GlobalContext);

    return <section id="tidbits">
        <h2>Tidbits</h2>
        {tidbits.map(tb => <Tidbit key={tb.id} tb={tb}/>)}
    </section>
}