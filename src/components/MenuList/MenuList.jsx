import { MenuListItem } from "../MenuListItem/MenuListItem";
import s from "./style.module.css";
import { Difficulties } from "./constant";
export function MenuList(props) {
  return (
    <div className={s.container}>
      {Difficulties.map((diff) => {
        return (
          <MenuListItem
            isSelected={props.difficulty === "diff"}
            onClick={props.onItemClick}
            difficulty={diff}
          />
        );
      })}
    </div>
  );
}
