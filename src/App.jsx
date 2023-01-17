import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./components/MenuList/MenuList";
import s from "./style.module.css";
import { useState } from "react";

export function App() {
  // store the difficult level hovered here and pass it
  const [currentDifficulty, setCurrentDifficulty] = useState("");
  const onMenuListItemClick = (diff)=>{
    setCurrentDifficulty(diff)
  }
  return (
    <div>
      <h1>Select your React difficulty level!</h1>
      <div className={s.workspace}>
        <MenuList onItemClick={onMenuListItemClick} />
        <DisplayDifficulty difficulty={currentDifficulty} />
      </div>
    </div>
  );
}
