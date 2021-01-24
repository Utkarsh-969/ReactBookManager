import logo from './logo.svg';
import React , {useState} from "react"; 
import './App.css';

function App() {

  const [val,setValue] = useState([]);
  const bookDB = {
    javascript: [
      { name: "Eloquent JavaScript", rating: "4/5" },
      { name: "You Don't Know JS", rating: "4.5/5" }
    ],
  
    fiction: [
      {
        name: "Shiva Trilogy",
        rating: "5/5"
      },
      {
        name: "Harry Potter and the Sorcerer's Stone",
        rating: "4.5/5"
      }
    ],
    business: [
      {
        name: "Never Split the Difference",
        rating: "3.5/5"
      },
      {
        name: "Loonshots",
        rating: "5/5"
      }
    ]
  };

  const booklistClicked = (data) =>{
      setValue(bookDB[data]);
      
  }

  return (
    <div className="App">
      <h1 className="book-container"> 📚 goodbooks </h1>
      <p>Checkout my favorite books. Select a genre to get started</p>
      {
      Object.keys(bookDB).map((data,index) => (
        <button key = {index} onClick={()=>booklistClicked(data)}>{data}</button>
      ))
      }
      <hr></hr>
      
      {
        val.map((data,index)=>(
          <ul key={index} className="book-ul">
              <li>
              <div className="primary-div">{data.name}</div>
              <div className="secondary-div">{data.rating}</div>
              </li>
        </ul>
        ))
      
      }

    </div>
  );
}

export default App;
