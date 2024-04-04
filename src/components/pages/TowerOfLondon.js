import React, { useState } from 'react';
import "../Collesium.css";
import TowerOfLondon1 from '../../images/TowerOfLondon1.png';
import TowerOfLondon2 from '../../images/TowerOfLondon2.png';
import TowerOfLondon3 from '../../images/TowerOfLondon3.png';
import TowerOfLondon4 from '../../images/TowerOfLondon4.png';
import TowerOfLondon5 from '../../images/TowerOfLondon5.png';
import TowerOfLondon6 from '../../images/TowerOfLondon6.png';

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
                <span id="diff">T</span>ower of London: England's Historic Fortress

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff">G</span>uardian of History and Crown Jewels

                            </h2>
                            <p>
                            The Tower of London stands proudly on the banks of the River Thames, embodying centuries of England's rich history and royal heritage. Initially built by William the Conqueror in the 11th century, this formidable fortress has served as a royal palace, a prison, and a treasury throughout its storied past. Its iconic White Tower, surrounded by imposing walls and defensive towers, has witnessed significant events such as royal coronations, political intrigue, and military campaigns. One of the Tower's most renowned treasures is the Crown Jewels, displayed within the Jewel House and attracting millions of visitors each year with their dazzling splendor. Beyond its role as a historic landmark, the Tower of London remains a symbol of England's enduring monarchy and a testament to the nation's enduring legacy.
                            </p>
                            <p>

                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={TowerOfLondon1} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={TowerOfLondon2} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">W</span>hite Tower

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "White Tower: A Timeless Symbol of Majesty and History"

                            </h2>
                            <p>
                            The White Tower, nestled within the historic confines of the Tower of London, stands as a timeless symbol of majesty and history. Built in the 11th century by William the Conqueror, this iconic structure has played a central role in England's royal and military history. Its striking white facade, sturdy walls, and turrets command attention, evoking a sense of grandeur and strength. Within the White Tower, visitors can explore exhibitions showcasing centuries of royal armor, weaponry, and artifacts, offering a glimpse into the past glories of medieval England. From the Norman Conquest to the Tudor era and beyond, the White Tower has borne witness to pivotal moments in the nation's history, making it a must-visit destination for history enthusiasts and admirers of architectural splendor alike.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={TowerOfLondon3} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={TowerOfLondon4} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">I</span>nnermost ward

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "The Innermost Ward of the Tower of London: Where the Heart of History Beats Strong"
                            </h2>
                            <p>
                            The Innermost Ward of the Tower of London holds the beating heart of England's rich history and heritage. Enclosed within the fortress's formidable walls, this central area has been a focal point of royal power and intrigue for centuries. Here, visitors can explore iconic structures like the White Tower, a symbol of Norman strength and architectural magnificence. The Innermost Ward also houses the Crown Jewels, a dazzling collection of royal regalia that speaks of centuries of monarchy and tradition. As one wanders through the cobblestone pathways and ancient buildings of the Innermost Ward, the echoes of royal ceremonies, political dramas, and military triumphs resonate, offering a profound journey into England's storied past. It is a place where the spirit of history comes alive, captivating all who walk its hallowed grounds.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={TowerOfLondon5} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={TowerOfLondon6} alt={""} id="port2" />
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

