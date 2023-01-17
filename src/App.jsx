import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./components/MenuList/MenuList";
import { MenuListItem } from "./components/MenuListItem/MenuListItem";
import s from "./style.module.css";

export function App() {
  return (
    <div>
      <h1>Select your React difficulty level!</h1>
      <div className={s.workspace}>
        <MenuList />
        {/* <MenuListItem difficulty="Low" /> */}
        <DisplayDifficulty difficulty="Low" />
      </div>
    </div>
  );
}
