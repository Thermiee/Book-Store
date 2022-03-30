import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';
import store from '../../redux/configureStore';
import Button from '../button/Button';

const Form = () => {
  const [form, setForm] = useState({
    inputTitle: '',
    inputAuthor: '',
    selectedValue: 'none',
    selectedText: '',
  });

  const handleTitleChange = (e) => {
    setForm({
      ...form,
      inputTitle: e.target.value,
    });
  };

  const handleAuthorChange = (e) => {
    setForm({
      ...form,
      inputAuthor: e.target.value,
    });
  };

  const handleSelectChange = (e) => {
    const index = e.target.selectedIndex;
    setForm({
      ...form,
      selectedValue: e.target.value,
      selectedText: e.target[index].innerHTML,
    });
  };

  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: store.getState().bookReducer.length,
      title: form.inputTitle,
      author: form.inputAuthor,
      category: form.selectedText,
    };

    dispatch(addBook(newBook));
  };

    <section className="form-section">
      <h4>ADD NEW BOOK</h4>
      <form className="book-form" onSubmit={(e) => submitBookToStore(e)}>
        <input
          type="text"
          id="book"
          placeholder="Book title"
          value={form.inputTitle}
          onChange={handleTitleChange}
          required
        />

        <input
          type="text"
          id="author"
          placeholder="Book author"
          value={form.inputAuthor}
          onChange={handleAuthorChange}
          required
        />

        <select
          value={form.selectedValue}
          onChange={handleSelectChange}
          name="categories"
          id="categories"
          required
        >
          <option value="none" disabled>
            Category
          </option>
          <option value="action">Action</option>
          <option value="sport">Sport</option>
          <option value="Fantasy">Fantasy</option>
          <option value="anime">Anime</option>
        </select>
        <Button text="ADD BOOK" buttonType="submit" id="submit" />
      </form>
    </section>;
};

export default Form;
