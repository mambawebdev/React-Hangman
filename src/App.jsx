/* eslint-disable no-unused-vars */
import Header from "./components/Header"
import "../src/App.css"
import Figure from "./components/Figure"
import WrongLetters from "./components/WrongLetters"
import Word from "./components/Word"
import Popup from "./components/Popup"
import Notification from "./components/Notification"
import { showNotification as show } from "./constants/lib"
import { useState, useEffect } from "react"

const words = [
  "apple", "banana", "cherry", "date", "elderberry",
  "fig", "grape", "honeydew", "iceberg", "jackfruit",
  "kiwi", "lemon", "mango", "nectarine", "orange",
  "papaya", "quince", "raspberry", "strawberry", "tangerine",
  "ugli", "vanilla", "watermelon", "xigua", "yam",
  "zucchini", "apricot", "blueberry", "cantaloupe", "dragonfruit",
  "eggplant", "feijoa", "guava", "hazelnut", "indigo",
  "jujube", "kumquat", "lime", "mulberry", "nutmeg",
  "olive", "peach", "plum", "pineapple", "persimmon",
  "radish", "spinach", "tomato", "turnip", "violet",
  "walnut", "artichoke", "broccoli", "carrot", "daikon",
  "endive", "fennel", "garlic", "horseradish", "jalapeno",
  "kale", "leek", "mustard", "onion", "parsnip",
  "quinoa", "rutabaga", "shallot", "squash", "truffle",
  "upland", "vine", "wasabi", "xanthan", "yeast",
  "zebra", "anchor", "breeze", "cascade", "dolphin",
  "ember", "fjord", "glacier", "harbor", "island",
  "jungle", "kayak", "lagoon", "meadow", "nugget",
  "oasis", "prairie", "quarry", "reef", "summit",
  "tundra", "valley", "whirlpool", "xerox", "yonder",
  "zenith"
];

let selectedWord = words[Math.floor(Math.random() * words.length)];

console.log(selectedWord)


const App = () => {

  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  /* Event Listener */

  useEffect(() => {
    const handleKeyDown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification)
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(wrongLetters => [...wrongLetters, letter]);

          } else {
            show(setShowNotification)
          }
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown)

  }, [correctLetters, wrongLetters, playable])

  const playAgain = () => {
    setPlayable(true)
    // Empty arrays
    setShowNotification(false)
    setWrongLetters([])
    setCorrectLetters([])
    const random = Math.floor(Math.random() * words.length)
    selectedWord = words[random]
  }



  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
      <Notification showNotification={showNotification} />
    </>
  )
}

export default App