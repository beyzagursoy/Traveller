import React, { useState } from 'react';
import "../Collesium.css";
import BritishMuseum1 from '../../images/BritishMuseum1.jpg';
import BritishMuseum2 from '../../images/BritishMuseum2.jpg';
import BritishMuseum3 from '../../images/BritishMuseum3.jpg';
import BritishMuseum4 from '../../images/BritishMuseum4.jpg';
import BritishMuseum5 from '../../images/BritishMuseum5.jpg';
import BritishMuseum6 from '../../images/BritishMuseum6.jpg';
import BritishMuseum7 from '../../images/BritishMuseum7.jpg';
import BritishMuseum8 from '../../images/BritishMuseum8.jpg';
import BritishMuseum9 from '../../images/BritishMuseum9.jpg';
import BritishMuseum10 from '../../images/BritishMuseum10.jpg';
import BritishMuseum11 from '../../images/BritishMuseum11.jpg';
import BritishMuseum12 from '../../images/BritishMuseum12.jpg';


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
                <span id="diff">B</span>ritish Museum: A Treasure Trove of Human History

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff">U</span>nraveling the World's Cultural Heritage

                            </h2>
                            <p>
                            The British Museum stands as a beacon of human history and cultural heritage, housing a vast collection of artifacts from civilizations spanning thousands of years. Founded in 1753, it is one of the world's most comprehensive museums, showcasing a diverse range of artworks, sculptures, manuscripts, and archaeological finds. Visitors can explore exhibits highlighting ancient Egypt, Greece, Rome, Mesopotamia, and other significant civilizations, gaining insights into their art, beliefs, and daily life. Notable treasures within the museum include the Rosetta Stone, the Elgin Marbles, and the Egyptian mummies, each offering a glimpse into the richness and complexity of human history. With its extensive collections and educational programs, the British Museum continues to inspire curiosity and appreciation for our shared cultural heritage.
                            </p>
                            <p>

                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={BritishMuseum2} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={BritishMuseum1} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">R</span>osetta Stone

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "Unlocking Ancient Mysteries: The Rosetta Stone at the British Museum"

                            </h2>
                            <p>
                            The Rosetta Stone, housed within the esteemed halls of the British Museum, stands as a monumental artifact bridging the gap between ancient civilizations and modern understanding. Discovered in 1799 in Egypt, this inscribed stone became a pivotal key in deciphering ancient Egyptian hieroglyphs. Its inscription, written in three scripts - hieroglyphs, Demotic script, and Greek - provided scholars with a crucial reference point for understanding the ancient language. Today, the Rosetta Stone is revered not only for its historical significance but also for its role in unlocking the mysteries of ancient Egyptian culture and language. As one of the British Museum's most prized possessions, it continues to fascinate and educate visitors about the marvels of human history and linguistic achievement.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={BritishMuseum3} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={BritishMuseum4} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">E</span>lgin Marbles

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "Greek Masterpieces: Discover the Legacy of the Elgin Marbles at the British Museum"
                            </h2>
                            <p>
                            The Elgin Marbles, housed in the British Museum, are a collection of classical Greek marble sculptures that date back to the 5th century BC. Originally part of the Parthenon and other buildings on the Acropolis of Athens, these sculptures were brought to Britain by Lord Elgin in the early 19th century. The collection includes intricately carved reliefs, statues, and architectural fragments depicting scenes from Greek mythology, religious rituals, and historical events. While their acquisition has been a subject of debate and controversy, the Elgin Marbles remain a testament to the artistic and cultural achievements of ancient Greece. Displayed in the British Museum, they offer visitors a glimpse into the grandeur of classical Greek art and architecture.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={BritishMuseum5} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={BritishMuseum6} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">M</span>oai Hoa Hakananai'a

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "Moai Hoa Hakananai'a: A Glimpse into Easter Island's Ancient Legacy"
                            </h2>
                            <p>
                                
                            The British Museum houses the iconic Moai Hoa Hakananai'a, a significant cultural artifact from Easter Island. Carved from compressed volcanic ash by the Rapa Nui people around 1000 CE, this moai statue stands at approximately 2.42 meters tall and weighs about 4 tons. What makes Moai Hoa Hakananai'a unique is its intricate carvings, particularly on its back and topknot, showcasing the artistic skills and cultural symbolism of the Rapa Nui civilization. Displayed in the British Museum, this statue serves as a reminder of the island's rich heritage and the enduring legacy of its indigenous people.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={BritishMuseum7} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={BritishMuseum8} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">L</span>ewis Chessmen

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "The Lewis Chessmen: Where Medieval Artistry Meets Strategic Play"
                            </h2>
                            <p>
                            The British Museum is home to the famous Lewis Chessmen, a remarkable collection of medieval chess pieces discovered on the Isle of Lewis in Scotland. Believed to have been made in Norway in the 12th century, these intricately carved ivory chess pieces include kings, queens, bishops, knights, rooks, and pawns. The Lewis Chessmen are renowned for their exquisite craftsmanship and intricate details, reflecting the artistic skill of the medieval craftsmen. These chess pieces provide valuable insights into the history of chess and medieval life, offering a glimpse into the leisure activities and cultural exchanges of the time.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={BritishMuseum9} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={BritishMuseum10} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">K</span>atebet Mother

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "Katebet Mother: A Timeless Ode to Egyptian Art and Spirituality"
                            </h2>
                            <p>
                            The British Museum features the Katebet Mother, an ancient Egyptian limestone relief dating back to the Middle Kingdom period, around 2055-1650 BCE. This exquisite artwork depicts a seated woman, believed to be Katebet, holding a lotus flower symbolizing rebirth and regeneration. The relief is intricately carved with hieroglyphic inscriptions, offering insights into ancient Egyptian beliefs and customs related to the afterlife. The Katebet Mother serves as a testament to the artistic skill and religious symbolism of ancient Egyptian civilization, providing visitors with a captivating glimpse into the culture and beliefs of the time.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={BritishMuseum11} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={BritishMuseum12} alt={""} id="port2" />
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

