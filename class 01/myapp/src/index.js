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


function Hi() {
  return <div>
    <div className="MyName">my name is zubair</div>
    <h1 className="List">Fruit List</h1>
    <ol className="fruite">
      <li>Orange {`2 + 9 = ${2 + 9}`}</li>
      <li>Orange {`2 * 9 = ${2 * 9}`}</li>
      <li>Orange {`2 - 9 = ${2 - 9}`}</li>
      <li>Orange {`2 / 9 = ${2 / 9}`}</li>
    </ol>
  </div>
}


function FacebookMedia(profile) {

   profile = {
    date: new Date().toLocaleTimeString(),
    userName: "Muhammad zubair",
    profilePic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "Czech football season to resume at the end of May",
    imageUrl: "https://cf.bstatic.com/images/hotel/max1024x768/161/161388017.jpg",
    body: "Football matches will start again in the Czech Republic at the end of May after over two months of forced closure due to the COVID-19 pandemic, the League Football Association (LFA) has announced. Teams voted Tuesday to extend the league competition beyond June 30, which is the typical end of the football season, reports Xinhua news agency"
  }

  return <div>

    <div className="mediacard">
      <div className="userData" >
        <div className="userImage">
          <img className="userprofile" src={profile.profilePic}></img>
        </div>
        <div className="NameDate">
          <span className="userName">{profile.userName}</span><br />
          <span className="date">{profile.date}</span>
        </div>
      </div>
      <h3>{profile.title}</h3>
      <p>{profile.body}</p>
      <p><img className="image" src={profile.imageUrl}></img></p>
    </div>

  </div>

}



function MediaCard(image) {

  var image = {
    title: "Czech football season to resume at the end of May",
    imageUrl: "https://www.thestatesman.com/wp-content/uploads/2020/04/1c5b1aa3386eeb2c21d633f04e2ddfbe.jpg",
    body: "Football matches will start again in the Czech Republic at the end of May after over two months of forced closure due to the COVID-19 pandemic, the League Football Association (LFA) has announced. Teams voted Tuesday to extend the league competition beyond June 30, which is the typical end of the football season, reports Xinhua news agency"
  }

  return <div>
    <Hi />
    <div className="mediacard">
      <p><img className="image" src={image.imageUrl}></img></p>
      <h1>{image.title}</h1>
      <p>{image.body}</p>
    </div>

    <FacebookMedia />
    <FacebookMedia />
    <FacebookMedia />
  </div>

}

ReactDOM.render(<MediaCard />, document.querySelector('#root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
