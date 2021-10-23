import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import useStateExample from './useState';

const books = [
{
  'id':1,
  'title': "You Can",
  'author': "by George Matthew Adams",
  'img': "https://m.media-amazon.com/images/I/51+R3tGEsvL._AC_UY218_.jpg"
},
{
  'id':2,
  'title': "Think and Grow Rich (DELUXE HARDBOUND EDITION)",
  'author': "by Napoleon Hill",
  'img': "https://m.media-amazon.com/images/I/81lr6LSKvKS._AC_UY218_.jpg"
  },
{
  'id':3,
  'title': "World’s Greatest Books For Personal Growth & Wealth (Set of 4 Books): Perfect Motivational Gift Set",
  'author': "by Napoleon Hill",
  'img': "https://m.media-amazon.com/images/I/71frknp-CWL._AC_UY218_.jpg"
},
];
// const author = "by George Matthew Adams";
function BookList() {
  return (
    <div>
      {books.map((book) => {
        // const { title, author, img } = book;
        return (
          <Book key={book.id} {...book} />
        );
      }
      )}
    </div>
  );
 }

const Book = (props) => {
  const { title, author, img } = props;
  const eventHandler = () => {
    alert('Hi! Hello');
  };
  const eventHandler1 = () => {
    console.log(title);
  };
  const eventHandler2 = (author) => {
    console.log(author);
  };
  return (
    <article className="box" onMouseOver={() => { console.log(title); }}>
      <h1 onClick={eventHandler1}>{title}</h1>
      <h5>{author}</h5>
      <img src={img} alt="book name" /><br/>
      <button type="button" onClick={eventHandler}>Click Here</button>
      <button type="button" onClick={()=>eventHandler2(author)}>Example</button>
      </article>
  );
}

ReactDOM.render(<BookList />, document.getElementById('root'));