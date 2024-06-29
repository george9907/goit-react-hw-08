import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter, setStatusFilter } from "../../redux/filters/slice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const handleFilter = (e) => {
    const name = e.target.value.trim();
    dispatch(setStatusFilter(name));
  };
  return (
    <div className={css.container}>
      <p className={css.header}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={handleFilter}
      />
    </div>
  );
}
