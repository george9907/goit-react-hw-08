import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import PageTitle from "../../components/PageTitle/PageTitle";
import css from './ContactPage.module.css'

export default function ContactPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <div className={css.container}>
        <PageTitle>Phonebook</PageTitle>
        <ContactForm />
        <SearchBox />
        {isLoading && <Loader>Loading message</Loader>}
        <ContactList />
        {isError && <ErrorMessage />}
      </div>
    </>
  );
}
