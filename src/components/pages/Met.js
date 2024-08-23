import React, { useState } from 'react';
import '../Met.css'; 
import MetImg from '../../images/met1.jpg';
import MetImg1 from '../../images/met2.jpg';
import MetImg2 from '../../images/met3.jpg';
import MetImg3 from '../../images/met4.jpg';
import MetImg4 from '../../images/met5.jpg';
import MetImg5 from '../../images/met6.jpg';
import  MetImg6 from '../../images/met7.jpg';
import  MetImg7 from '../../images/met8.jpg';

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
        <span id="diff">T</span>he Met Fifth Avenue
        
      </h2>
      <div className="t-row">
        <div className="infobox module">
          <div className="box">
            <div className="title">
              <h2>
                <span id="diff">T</span>racing Time: A Journey Through The Met Museum
                
              </h2>
              <p>
              The Metropolitan Museum of Art is one of the world's largest and finest art museums. Its collections include 1.5 million works of art spanning 5,000 years of world culture, from prehistory to the present and from every part of the globe.
              </p>
            
            </div>
          </div>
        </div>
        <div className="images module">
          <div className="img1">
            <img src={MetImg} alt={""} id="port1" />
          </div>
          <div className="img2">
            <img src={MetImg1} alt={""} id="port2" />
          </div>
        </div>
      </div>
      <hr id="line" />

      <h2>
        <span id="diff">T</span>he American Wing
       
      </h2>
      <div className="t-row">
        <div className="infobox module">
          <div className="box">
            <div className="title">
              <h2>
                <span id="diff"></span>
                "Wings of American Heritage: Exploring The American Wing at The Met"
               
              </h2>
              <p>
              The Metropolitan Museum of Art is situated in Lenapehoking, homeland of the Lenape diaspora, and historically a gathering and trading place for many diverse Native Peoples, who continue to live and work on this island. We respectfully acknowledge and honor all Indigenous communities—past, present, and future—for their ongoing and fundamental relationships to the region.

Ever since its establishment in 1870, the Museum has acquired important examples of American art. A separate "American Wing" to display the domestic arts of the seventeenth to early nineteenth centuries opened in 1924; painting and sculpture galleries and a skylit courtyard were added in 1980.
              </p>
            </div>
          </div>
        </div>
        <div className="images module">
          <div className="img1">
            <img src={MetImg2} alt={""} id="port1" />
          </div>
          <div className="img2">
            <img src={MetImg3} alt={""} id="port2" />
          </div>
        </div>
      </div>
      <hr id="line" />
      <h2>
        <span id="diff">A</span>ncient Near Eastern Art
       
      </h2>
      <div className="t-row">
        <div className="infobox module">
          <div className="box">
            <div className="title">
              <h2>
                <span id="diff"></span>
            
"Echoes of Antiquity: Exploring Ancient Near Eastern Art at The Met"
              
              </h2>
              <p>
              The Met's Department of Ancient Near Eastern Art cares for approximately 7,000 works ranging in date from the eighth millennium B.C. through the centuries just beyond the emergence of Islam in the seventh century A.D. Objects in the collection were created by people in the area that today comprises Iraq, Iran, Turkey, Syria, the Eastern Mediterranean coast, Yemen, and Central Asia. From the art of some of the world's first cities to that of great empires, the department's holdings illustrate the beauty and craftsmanship as well as the profound interconnections, cultural and religious diversity, and lasting legacies that characterize the ancient art of this vast region.
              </p>
            </div>
          </div>
        </div>
        <div className="images module">
          <div className="img1">
            <img src={MetImg4} alt={""} id="port1" />
          </div>
          <div className="img2">
            <img src={MetImg5} alt={""} id="port2" />
          </div>
        </div>
      </div>
      <hr id="line" />
      <h2>
        <span id="diff">E</span>uropean Paintings
   
      </h2>
      <div className="t-row">
        <div className="infobox module">
          <div className="box">
            <div className="title">
              <h2>
                <span id="diff"></span>
                
"Masterpieces Unveiled: European Paintings Through the Ages at The Met"
                
              </h2>
              <p>
              The Met’s celebrated European Paintings collection encompasses more than 2,500 works of art from the thirteenth through the early twentieth century. In addition to the department’s galleries, pictures hang in the Robert Lehman Collection, the Jack and Belle Linsky Collection, and in other departmental galleries at The Met Fifth Avenue, as well as at The Met Cloisters.

Apart from individual masterpieces by artists as diverse as Jan van Eyck, Caravaggio, and Gustav Klimt, The Met possesses a rich display of early Italian and Northern art, along with one of the world’s greatest collections of seventeenth-century Dutch paintings, including outstanding works by Frans Hals, Rembrandt, and Johannes Vermeer. The Museum's holdings of El Greco and Goya are the finest outside of Spain. Its galleries of nineteenth-century French paintings are second only to the museums of Paris, presenting in depth the art of Gustave Courbet, Edgar Degas, Édouard Manet, Claude Monet, Paul Cézanne, Vincent van Gogh, and others.
              </p>
            </div>
          </div>
        </div>
        <div className="images module">
          <div className="img1">
            <img src={MetImg6} alt={""} id="port1" />
          </div>
          <div className="img2">
            <img src={MetImg7} alt={""} id="port2" />
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