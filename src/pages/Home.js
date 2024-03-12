  import React from 'react';
  import './css/Home.css';



  const Home = () => {

    const handleClick = () => {
      window.location.href = "./Account";
    };

    const handleClick2 = () => {
      window.location.href = "./Card";
    };

    return (
      <div>
        <div className="button" onClick={handleClick}><b>Account</b></div>
        <div className="button" onClick={handleClick2}><b>Card</b></div>
      </div>
    );
  };

  export default Home;
