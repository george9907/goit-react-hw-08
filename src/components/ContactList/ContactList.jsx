import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectedContacts } from "../../redux/contacts/slice";

export default function ContactList() {
  const yourContacts = useSelector(selectedContacts);
  return (
    <ul className={css.list}>
      {yourContacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
}
