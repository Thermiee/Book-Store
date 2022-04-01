import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();

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

  const handleSelectChange = (e) => {
    const index = e.target.selectedIndex;
    setForm({
      ...form,
      selectedValue: e.target.value,
      selectedText: e.target[index].innerHTML,
    });
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title: form.inputTitle,
      category: form.selectedText,
    };

    dispatch(postBook(newBook));
  };
  return (
    <form onSubmit={(e) => submitBookToStore(e)} className="book-form" required>
      <label htmlFor="book">
        ADD NEW BOOK
        <br />
        <input
          type="text"
          id="book"
          placeholder="Book title"
          value={form.inputTitle}
          onChange={handleTitleChange}
          required
        />
      </label>
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
      <button className="btn" type="submit">
        ADD BOOK
      </button>
    </form>
  );
};
export default Form;
