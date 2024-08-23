import React, { useState } from "react";
import "../Centralpark.css"; 
import Central1 from "../../images/Central1.jpg";
import Central2 from "../../images/Central2.jpg";
import Central3 from "../../images/Central3.jpg";
import Central4 from "../../images/Central4.jpg";
import Central5 from "../../images/Central5.jpg";
import Central6 from "../../images/Central6.jpg";
import Central7 from "../../images/Central6.jpg";
import Central8 from "../../images/Central8.jpg";

function Louvre() {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Yorum:", comment);
    console.log("Puan:", rating);
    setComment("");
    setRating(0);
  };

  const StarRating = ({ value, onClick }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={value >= i ? "star-filled" : "star-empty"}
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
        <span id="diff">P</span>ARK HISTORY
      </h2>
      <div className="t-row">
        <div className="infobox module">
          <div className="box">
            <div className="title">
              <h2>
                <span id="diff"></span>
                "Central Park Serenity: Exploring the Heart of Manhattan's Green
                Oasis"
              </h2>
              <p>
                New York’s Central Park is a world-famous public park, created
                beginning in 1858 to address the recreational needs of the
                rapidly growing City. Its original purpose was to offer urban
                dwellers an experience of the countryside, a place to escape
                from the stresses of urban life and to commune with nature and
                fellow New Yorkers. Over 150 years later, the Park still
                provides this essential purpose, and welcomes all visitors,
                while accommodating newer forms of recreational activities. With
                42 million visits a year, Central Park is one of the most
                visited urban parks in the country and one of the most popular
                destinations in New York City.
              </p>
            </div>
          </div>
        </div>
        <div className="images module">
          <div className="img1">
            <img src={Central1} alt={""} id="port1" />
          </div>
          <div className="img2">
            <img src={Central2} alt={""} id="port2" />
          </div>
        </div>
      </div>
      <hr id="line" />

      <h2>
        <span id="diff">A</span>rt and Entertainment
      </h2>
      <div className="t-row">
        <div className="infobox module">
          <div className="box">
            <div className="title">
              <h2>
                <span id="diff"></span>
                Central Park: The Heart of Culture, Art, and Entertainment
              </h2>
              <p>
                Central Park is a hub of cultural activities and artistic
                expression. Each year, the park hosts numerous concerts, theater
                performances, and outdoor exhibitions featuring renowned artists
                and groups. Moreover, it serves as a popular filming location
                for many famous movies and TV shows. Adorned with sculptures,
                monuments, and architectural landmarks, Central Park offers
                visitors a unique artistic experience. With events that change
                with the seasons, the park is always bustling with liveliness
                and activity, making a distinct contribution to the city's
                cultural life.
              </p>
            </div>
          </div>
        </div>
        <div className="images module">
          <div className="img1">
            <img src={Central3} alt={""} id="port1" />
          </div>
          <div className="img2">
            <img src={Central4} alt={""} id="port2" />
          </div>
        </div>
      </div>
      <hr id="line" />
      <h2>
        <span id="diff">R</span>esilience and Renewal
      </h2>
      <div className="t-row">
        <div className="infobox module">
          <div className="box">
            <div className="title">
              <h2>
                <span id="diff"></span>
                Central Park: A Symbol of Resilience and Renewal
              </h2>
              <p>
                Throughout its history, Central Park has endured challenges and
                transformations, emerging as a symbol of resilience and renewal
                for New York City. From its initial design during the mid-19th
                century to its restoration efforts in the late 20th century, the
                park has continuously evolved to meet the changing needs of its
                diverse community. Today, Central Park stands as a testament to
                the city's ability to adapt and thrive in the face of adversity,
                inspiring generations to come.
              </p>
            </div>
          </div>
        </div>
        <div className="images module">
          <div className="img1">
            <img src={Central5} alt={""} id="port1" />
          </div>
          <div className="img2">
            <img src={Central6} alt={""} id="port2" />
          </div>
        </div>
      </div>
      <hr id="line" />
      <h2>
        <span id="diff">H</span>idden Gems and Must-See Attractions
      </h2>
      <div className="t-row">
        <div className="infobox module">
          <div className="box">
            <div className="title">
              <h2>
                <span id="diff"></span>
                "Exploring Central Park: Hidden Gems and Must-See Attractions"
              </h2>
              <p>
                Central Park is not just a park; it's a treasure trove of hidden
                gems and iconic landmarks waiting to be explored. From the
                picturesque Bow Bridge to the enchanting Bethesda Terrace, there
                are countless attractions that captivate visitors year-round.
                Don't miss the vibrant displays at the Conservatory Garden or
                the stunning views from Belvedere Castle. Whether you're a
                first-time visitor or a seasoned local, there's always something
                new to discover in Central Park.
              </p>
            </div>
          </div>
        </div>
        <div className="images module">
          <div className="img1">
            <img src={Central7} alt={""} id="port1" />
          </div>
          <div className="img2">
            <img src={Central8} alt={""} id="port2" />
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