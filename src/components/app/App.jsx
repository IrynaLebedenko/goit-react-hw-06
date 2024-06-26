import ContactForm from "../contactForm/ContactForm";
import SearchBox from "../searchBox/SearchBox";
import ContactList from "../contactList/ContactList";
import css from './App.module.css'

const App = () => {

  return (
    <div className={css.mainContainer}>
    <h1 className={css.title}>Phonebook</h1>
    <ContactForm/>
      <SearchBox /> 
      <ContactList/>
      </div>
  );
};

export default App;