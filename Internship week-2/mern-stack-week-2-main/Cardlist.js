import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';
const Cardlist = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img
              src="data:image/jpeg;base64,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"
              className="card-img-top"
              alt="Card 1"
            />
            <div className="card-body">
              <center>
              <h5 className="card-title">Chandler Bing</h5>
              </center>
             
              <p className="card-text">Hi, I’m Chandler. I make jokes when I’m uncomfortable.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTZiXFjB-i-uEw4yL6Mil15qNIpFN5L8pKsg&usqp=CAU"
              className="card-img-top"
              alt="Card 2"
            />
            <div className="card-body">
              <center>
              <h5 className="card-title">Joey Tribbiani</h5>
              </center>
              <p className="card-text">If he doesn't like you, this is all a moo point. How you doin???</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3CKF9510K6dfBbcMWOSmSpMhObCPndOBoIA&usqp=CAU"
              className="card-img-top"
              alt="Card 3"
            />
            <div className="card-body">
              <center>
              <h5 className="card-title">Ross Geller</h5>
              </center>
              
              <p className="card-text">That Sandwich was the only good thing going on in my life.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardlist;