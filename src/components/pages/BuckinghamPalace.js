import React, { useState } from 'react';
import "../Collesium.css";
import BuckinghamInside from '../../images/buckinghaminside.jpg';
import Buckingham from '../../images/buckingham.jpg';
import VictoriaMemorial from '../../images/VictoriaMemorial.jpg';
import VictoriaMemorial2 from '../../images/VictoriaMemorial2.jpg';
import CentreRoom from '../../images/CentreRoom.jpg';
import CentreRoom2 from '../../images/CentreRoom2.jpg';
import YellowRoom from '../../images/YellowRoom.jpg';
import YellowRoom2 from '../../images/YellowRoom2.jpg';
import Ambassadors from '../../images/Ambassadors.jpg';
import Ambassadors2 from '../../images/Ambassadors2.jpg';
import GrandEntrance from '../../images/GrandEntrance.jpg';
import GrandEntrance2 from '../../images/GrandEntrance2.jpg';
import ThroneRoom from '../../images/ThroneRoom.jpg';
import ThroneRoom2 from '../../images/ThroneRoom2.jpg';


function Collesium() {
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
                <span id="diff">B</span>uckingham Palace: Where Royalty Reigns Supreme

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff">E</span>xperience Majesty at Buckingham Palace

                            </h2>
                            <p>
                                Buckingham Palace, located in London, England, is not only the official residence of the British monarch but also a symbol of British royalty and history. With its iconic facade, grandeur, and historical significance dating back centuries, Buckingham Palace stands as a testament to the rich heritage and tradition of the British monarchy. Its majestic architecture and role as a focal point for royal ceremonies and events make it a must-visit landmark for tourists from around the world.
                            </p>
                            <p>

                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={BuckinghamInside} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={Buckingham} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">V</span>ictoria Memorial

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "Victoria Memorial: Honoring Majesty and Legacy"

                            </h2>
                            <p>
                                The Victoria Memorial is a renowned monument located in front of Buckingham Palace in London, England. Dedicated to Queen Victoria, it stands as a tribute to her long reign and significant contributions to the British Empire. The memorial features a majestic statue of Queen Victoria seated on her throne, surrounded by allegorical figures representing aspects of her reign and empire. The intricate design, including bronze sculptures and ornate carvings, makes the Victoria Memorial a symbol of British heritage and history, attracting visitors from all over the world.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={VictoriaMemorial} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={VictoriaMemorial2} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">C</span>entre Room

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "Experience Splendor in the Heart of Buckingham Palace"
                            </h2>
                            <p>
                                The center room of Buckingham Palace, often referred to as the Grand Ballroom, is a stunning display of opulence and regal grandeur. This magnificent room serves as the venue for some of the most prestigious events and state occasions hosted by the British monarchy. With its soaring ceilings, exquisite chandeliers, and intricate decorations, the center room exudes a sense of elegance and tradition. Adorned with priceless artworks and historical artifacts, it offers a glimpse into the rich history and royal splendor associated with Buckingham Palace.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={CentreRoom} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={CentreRoom2} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">Y</span>ellow Drawing Room

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "Golden Elegance: Unveiling History at Buckingham Palace's Yellow Drawing Room"
                            </h2>
                            <p>
                                The Yellow Drawing Room at Buckingham Palace is a captivating space known for its luxurious decor and historical significance. Adorned in shades of gold and yellow, this room exudes warmth and elegance, making it a favorite setting for intimate gatherings and private meetings of the British royal family. The intricate ceiling design, ornate furnishings, and exquisite artwork contribute to the room's grandeur and charm. With its rich history and timeless beauty, the Yellow Drawing Room remains a treasured part of Buckingham Palace's heritage.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={YellowRoom} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={YellowRoom2} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">A</span>mbassadors' Court

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "Ambassadors' Court: Where Diplomacy Meets Majesty"
                            </h2>
                            <p>
                            Ambassadors' Court at Buckingham Palace is a distinguished space that embodies diplomatic grace and royal hospitality. This iconic courtyard serves as a venue for official ceremonies, state receptions, and diplomatic events, reflecting the palace's role as a symbol of British diplomacy and international relations. With its impressive architecture, adorned with classical columns and intricate detailing, Ambassadors' Court creates a grand and welcoming atmosphere for visiting dignitaries and guests. Surrounded by the historic walls of Buckingham Palace, this court resonates with the rich history and diplomatic legacy of the British monarchy.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={Ambassadors} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={Ambassadors2} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">A</span>mbassadors' Court

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "Step into Splendor: The Majesty of Buckingham Palace's Grand Entrance"
                            </h2>
                            <p>
                            The Grand Entrance of Buckingham Palace is a majestic gateway that sets the tone for the grandeur and magnificence within. As one of the primary entrances to the palace, it welcomes dignitaries, heads of state, and visitors with its impressive facade and regal architecture. The grandeur of the entrance is accentuated by the presence of the iconic balcony, where the royal family makes public appearances during special occasions. Adorned with intricate carvings, grand columns, and ornate detailing, the Grand Entrance epitomizes the royal splendor and heritage associated with Buckingham Palace.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={GrandEntrance} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={GrandEntrance2} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">T</span>hrone Room

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "Where Majesty Reigns: Discover the Grandeur of Buckingham Palace's Throne Room"
                            </h2>
                            <p>
                            The Throne Room at Buckingham Palace is a symbol of regal authority and historical significance. This magnificent chamber, with its high ceilings, grand architecture, and opulent decor, has witnessed numerous royal ceremonies and official functions over the centuries. At its heart sits the magnificent throne, a symbol of monarchy and power, flanked by iconic symbols of the British Empire. The Throne Room's rich tapestries, exquisite furnishings, and intricate details create an ambiance of majesty and tradition, making it a focal point for royal events and a testament to the enduring legacy of the British monarchy.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={ThroneRoom} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={ThroneRoom2} alt={""} id="port2" />
                    </div>
                </div>
            </div>


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


export default Collesium;

