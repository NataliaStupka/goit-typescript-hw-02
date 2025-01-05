//FormikHelpers - Обробник сабміту форми
import { Formik, Form, Field, FormikHelpers } from "formik";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";
import PropTypes from "prop-types";
import { FC } from "react";

interface SearchBarProps {
  onSearchValue: (value: string) => void;
}
interface SearchValue {
  query: string;
}

//const SearchBar: React.FC<{onSearchValue: (value: string) => void}> = ({onSearchValue}) =>
const SearchBar: FC<SearchBarProps> = ({ onSearchValue }) => {
  //початкові значення
  const initialValues = {
    query: "",
  };
  const handleSubmit = (
    value: SearchValue,
    options: FormikHelpers<SearchValue>
  ) => {
    if (value.query === "") {
      toast.error("Введіть значення в поле пошуку!");
    }
    // console.log('FieldSearchBar:', value);
    onSearchValue(value.query); // передаю в app, що шукаємо
    options.resetForm(); //очистка input
  };

  return (
    <header>
      {/* тег Formik не стилізується*/}
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field
            name="query"
            placeholder="Search images and photo"
            autoFocus
            autoComplete="off"
            className={s.input}
          ></Field>
          <button type="submit" className={s.button}>
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};

SearchBar.propTypes = {
  onSearchValue: PropTypes.func.isRequired,
};

export default SearchBar;
