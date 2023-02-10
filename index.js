const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="head">Congratulations</h1>
    <div className="person-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="person-img"
      />
      <h1 className="name"> Kiran V</h1>
      <p className="role">
        Vishnu Institute of Computer Education and Technology,Bhimavaram.
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watch-img"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
