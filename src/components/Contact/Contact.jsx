import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={css.contactContainer}>
      <div>
        <p className={css.person}>
          <IoPerson /> {name}
        </p>
        <p className={css.person}>
          <FaPhoneAlt /> {number}
        </p>
      </div>

      <button className={css.button} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
