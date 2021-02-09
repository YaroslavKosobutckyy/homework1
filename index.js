import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// Завдання 1 
/* 

class User extends Component {
  constructor(props){
    super(props);
this.handleChange = this.handleChange.bind(this);
    this.state = {
                  name: 'Yaroslav'
    }
  }
      handleChange(i){
         this.setState( {
              name: i.target.value
         });
      }      
  render () {
    return (
      <div>
          <label> Enter your name</label>
          <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
          />
          
          <SomeText childName= {this.state.name}/>


      </div>
    )
  }
}

function SomeText (props) {
  const {childName:name} = props;
  return (
    <h1>{name}</h1>
  );
} 
ReactDOM.render(
  <User />,
  document.getElementById('root')
  );  
 */




// Завдання 2

У файлах-компонентах Baza.js, User.js, UserList.js, App.js, Index.js

Чомусь непрацює  три дні мучусь, вже 10 раз переробляв по різному... Даний варіант на мою думку самий вдалий але --- помилки!!!
