import { useEffect } from "react";
import { checkWin } from "../constants/lib";

const Popup = ({ correctLetters, selectedWord, wrongLetters, setPlayable, playAgain }) => {

    let finalMessage = '';
    let finalMessageRevealWord = '';
    let playable = true;

    if (checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
        finalMessage = "Congratulations! You Won! 💪"
        playable = false;
    } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
        finalMessage = "Unfortunately you've lost 😅"
        finalMessageRevealWord = `... the word was: ${selectedWord}`;
        playable = false;
    }

    useEffect(() => setPlayable(playable))


    return (
        /* <!-- Container for final message --> */
        <div className="popup-container" style={finalMessage !== "" ? { display: "flex" } : {}}>
            <div className="popup">
                <h2>{finalMessage}</h2>
                <h3>{finalMessageRevealWord}</h3>
                <button onClick={playAgain}>Play Again</button>
            </div>
        </div>
    )
}

export default Popup

/* 43:05 */