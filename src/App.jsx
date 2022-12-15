import { useState } from "react";
import Homepage from "./Homepage";
import Game from "./Game";
import "./App.css";

function App() {
    const [display, setDisplay] = useState("homepage");
    return (
        <>
            {display === "homepage" && <Homepage startGame={() => setDisplay("game")} />}
            {display === "game" && <Game />}
        </>
    );
}

export default App;
