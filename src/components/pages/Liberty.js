import React, { useState } from "react";
import "../Liberty.css";
import Statue1 from "../../images/Statue1.jpg";
import Statue2 from "../../images/Statue2.jpg";
import Museum1 from "../../images/Museum1.jpg";
import Museum2 from "../../images/Museum2.jpg";
import Ellis1 from "../../images/Ellis1.jpg";
import Ellis2 from "../../images/Ellis2.jpg";
import StatueImg1 from "../../images/StatueImg1.jpg";
import StatueImg2 from "../../images/StatueImg2.jpg";

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
        <span id="diff">T</span>he Statue of Liberty
      </h2>
      <div className="t-row">
        <div className="infobox module">
          <div className="box">
            <div className="title">
              <h2>
                <span id="diff"></span>
                "Guardian of Liberty: The Statue That Defines America"
              </h2>
              <p>
                She is an icon, a national treasure, and one of the most
                recognizable figures in the world. Each year millions who
                cherish her ideals make the journey to experience her history
                and grandeur in person. She is the Statue of Liberty, a symbol
                of freedom, inspiration, and hope.
              </p>
            </div>
          </div>
        </div>
        <div className="images module">
          <div className="img1">
            <img src={Statue1} alt={""} id="port1" />
          </div>
          <div className="img2">
            <img src={Statue2} alt={""} id="port2" />
          </div>
        </div>
      </div>
      <hr id="line" />

      <h2>
        <span id="diff">T</span>HE STATUE OF LIBERTY MUSEUM
      </h2>
      <div className="t-row">
        <div className="infobox module">
          <div className="box">
            <div className="title">
              <h2>
                <span id="diff"></span>
                Explore the Meaning of Liberty
              </h2>
              <p>
                With its combination of breathtaking views and living history,
                the Statue of Liberty Museum stands as an inspiring and dynamic
                part of the Liberty Island experience, inviting visitors to dive
                into the story behind the sculpture and immerse themselves in
                unique artifacts.
              </p>
            </div>
          </div>
        </div>
        <div className="images module">
          <div className="img1">
            <img src={Museum1} alt={""} id="port1" />
          </div>
          <div className="img2">
            <img src={Museum2} alt={""} id="port2" />
          </div>
        </div>
      </div>
      <hr id="line" />
      <h2>
        <span id="diff">E</span>llis Island
      </h2>
      <div className="t-row">
        <div className="infobox module">
          <div className="box">
            <div className="title">
              <h2>
                <span id="diff"></span>
              
"Ellis Island: Gateway to the American Dream"
              </h2>
              <p>
              Ellis Island may not appear large on a map, but it is an unparalleled destination in United States history. After welcoming more than 12 million immigrants to our shores, Ellis Island is now a poetic symbol of the American Dream.
              </p>
            </div>
          </div>
        </div>
        <div className="images module">
          <div className="img1">
            <img src={Ellis1} alt={""} id="port1" />
          </div>
          <div className="img2">
            <img src={Ellis2} alt={""} id="port2" />
          </div>
        </div>
      </div>
      <hr id="line" />
      <h2>
        <span id="diff">T</span>HE FUTURE OF LIBERTY
      </h2>
      <div className="t-row">
        <div className="infobox module">
          <div className="box">
            <div className="title">
              <h2>
                <span id="diff"></span>
                Looking to the Horizon
              </h2>
              <p>
              The promise embodied by the Statue of Liberty remains as potent as ever. An enduring symbol of possibility, she stands as a beacon of hope to people from all walks of life.

The Statue of Liberty-Ellis Island Foundation is resolved to keeping Lady Liberty standing tall, ensuring she is forever a beacon for all. We pursue our mission diligently, and since 1982 have successfully expanded Liberty Island’s educational footprint, opened a thrilling museum, improved accessibility, and ensured the monument remains properly cared for.

But there’s still work to be done.
              </p>
            </div>
          </div>
        </div>
        <div className="images module">
          <div className="img1">
            <img src={StatueImg1} alt={""} id="port1" />
          </div>
          <div className="img2">
            <img src={StatueImg2} alt={""} id="port2" />
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