import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// function Hi() {
//   return<div>
//   <div className="MyName">my name is zubair</div>
//   <h1 className="List">Fruit List</h1>
//   <ol className="fruite">
//     <li>Orange {`2 + 9 = ${2+9}` }</li>
//     <li>Orange {`2 * 9 = ${2*9}` }</li>
//     <li>Orange {`2 - 9 = ${2-9}` }</li>
//     <li>Orange {`2 / 9 = ${2/9}` }</li>
//   </ol>
//   </div>
// }



function MediaCard(image) {

  var image = {
    title: "footBall",
    imageUrl: "https://www.thestatesman.com/wp-content/uploads/2020/04/1c5b1aa3386eeb2c21d633f04e2ddfbe.jpg",
    body: ""
  }

  return <div>
    <p><img src={image.imageUrl}></img></p>

  </div>

}

ReactDOM.render(<MediaCard />, document.querySelector('#root'))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
