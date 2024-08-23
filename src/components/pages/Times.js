import React, { useState } from 'react';
import '../Times.css'; // Louvre.css dosyasını içe aktar
import Brodway from '../../images/brodway.jpg';
import Brodway1 from '../../images/brodway1.jpg';
import Times1 from '../../images/Times1.jpg';
import Times2 from '../../images/Times2.jpg';
import Soltice1 from '../../images/Soltice1.jpg';
import Soltice2 from '../../images/Soltice2.jpg';
import HardRock1 from '../../images/HardRock1.jpg';
import HardRock2 from '../../images/HardRock2.jpg';

function Louvre() {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Yorum:', comment);
    console.log('Puan:', rating);
    setComment('');
    setRating(0);
  };

  const StarRating = ({ value, onClick }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={value >= i ? 'star-filled' : 'star-empty'}
          onClick={() => onClick(i)}
        >
          ★
        </span>
      );
    }
    return <div>{stars}</div>;
  };

  return (
    <div className="t-info">
      <h2>
        <span id="diff">B</span>roadway theatre
        
      </h2>
      <div className="t-row">
        <div className="infobox module">
          <div className="box">
            <div className="title">
              <h2>
                <span id="diff">T</span>he Glittering Stage of New York: Behind the Curtain at Broadway's Heart
                
              </h2>
              <p>
              What is Broadway in New York famous for?
Broadway | Theater District, Times Square, Entertainment ...
Broadway, New York City thoroughfare that traverses the length of Manhattan, near the middle of which are clustered the theatres that have long made it the foremost showcase of commercial stage entertainment in the United States. The term Broadway is virtually synonymous with American theatrical activity.
              </p>
             
            </div>
          </div>
        </div>
        <div className="images module">
          <div className="img1">
            <img src={Brodway} alt={""} id="port1" />
          </div>
          <div className="img2">
            <img src={Brodway1} alt={""} id="port2" />
          </div>
        </div>
      </div>
      <hr id="line" />

      <h2>
        <span id="diff">N</span>ew Year's Eve
       
      </h2>
      <div className="t-row">
        <div className="infobox module">
          <div className="box">
            <div className="title">
              <h2>
                <span id="diff"></span>
                Times Square New Year's Eve 
               
              </h2>
              <p>
              Every year as the clock nears midnight on December 31, the eyes of the world turn once more to the dazzling lights and bustling energy of Times Square. Anticipation runs high. New Year's Eve at the symbolic center of New York City has become more than just a celebration — it's a global tradition.

The world holds its breath, and cheers as the clocks strike twelve.
              </p>
            </div>
          </div>
        </div>
        <div className="images module">
          <div className="img1">
            <img src={Times1} alt={""} id="port1" />
          </div>
          <div className="img2">
            <img src={Times2} alt={""} id="port2" />
          </div>
        </div>
      </div>
      <hr id="line" />
      <h2>
        <span id="diff">S</span>olstice in Times Square
       
      </h2>
      <div className="t-row">
        <div className="infobox module">
          <div className="box">
            <div className="title">
              <h2>
                <span id="diff"></span>
                Solstice in Times Square
              
              </h2>
              <p>
              Solstice in Times Square: Mind Over Madness Yoga returned on Wednesday, June 21, 2023 with our 21st annual event! Experienced yogis and first-timers alike were invited to join us for one of seven free yoga classes taking place throughout the day on the Broadway pedestrian plazas, finding calm once again within the chaos of life in New York City.
              </p>
            </div>
          </div>
        </div>
        <div className="images module">
          <div className="img1">
            <img src={Soltice1} alt={""} id="port1" />
          </div>
          <div className="img2">
            <img src={Soltice2} alt={""} id="port2" />
          </div>
        </div>
      </div>
      <hr id="line" />
      <h2>
        <span id="diff">H</span>ARD ROCK CAFE
   
      </h2>
      <div className="t-row">
        <div className="infobox module">
          <div className="box">
            <div className="title">
              <h2>
                <span id="diff"></span>
                HARD ROCK CAFE
                
              </h2>
              <p>
              As one of the city's largest entertainment destinations, Hard Rock Cafe New York features a 708-seat restaurant and a recently opened 1,800-square-foot Rock Shop® with authentic Hard Rock merchandise. Furthermore, the cafe boasts a unique outdoor space above the building's historic marquee, where guests can host private parties amid the lights and excitement of Times Square.
              </p>
            </div>
          </div>
        </div>
        <div className="images module">
          <div className="img1">
            <img src={HardRock1} alt={""} id="port1" />
          </div>
          <div className="img2">
            <img src={HardRock2} alt={""} id="port2" />
          </div>
        </div>
      </div>
      <hr id="line" />
      <div className="comment-section">
        <h2>Comment and Rate</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="comment">Comment:</label>
            <textarea
              id="comment"
              value={comment}
              onChange={handleCommentChange}
              rows="4"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating:</label>
            <StarRating value={rating} onClick={handleRatingChange} />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
   

export default Louvre;