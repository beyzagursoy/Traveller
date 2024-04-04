import React, { useState } from 'react';
import "../Collesium.css";
import TowerBridge1 from '../../images/TowerBridge1.jpg';
import TowerBridge2 from '../../images/TowerBridge2.jpg';
import TowerBridge3 from '../../images/TowerBridge3.jpg';
import TowerBridge4 from '../../images/TowerBridge4.jpg';
import TowerBridge5 from '../../images/TowerBridge5.jpg';
import TowerBridge6 from '../../images/TowerBridge6.jpg';

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
                <span id="diff">T</span>ower Bridge: London's Iconic Gateway to the Thames

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff">C</span>rossing Borders, Connecting Cultures: Tower Bridge"

                            </h2>
                            <p>
                                Tower Bridge, located in London, is an iconic landmark that symbolizes the city's rich history and architectural grandeur. Spanning the River Thames, it serves as a gateway connecting the bustling neighborhoods of London. With its distinctive twin towers and majestic bascule design, Tower Bridge is not just a functional structure but a symbol of London's enduring legacy. Visitors from around the world flock to admire its beauty and engineering marvel, making it a must-see attraction in the vibrant tapestry of London's skyline. As the sun sets and the lights illuminate this historic bridge, it becomes a beacon of unity, bridging the past and present, and welcoming everyone to experience the magic of London.
                            </p>
                            <p>

                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={TowerBridge1} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={TowerBridge2} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">H</span>istory of Tower Bridge

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "Tower Bridge: Bridging Centuries with Timeless Elegance"

                            </h2>
                            <p>
                                Tower Bridge stands as a testament to London's rich history and engineering prowess. Completed in 1894, this iconic bascule and suspension bridge has since become one of the most recognizable symbols of the city. Its construction was a marvel of Victorian-era engineering, blending practicality with architectural beauty. Over the years, Tower Bridge has witnessed significant moments in London's history, from the bustling activity of the Industrial Revolution to the resilience displayed during World War II. Today, it continues to be a vital artery across the River Thames, welcoming millions of visitors who marvel at its intricate design and panoramic views of London's skyline. As a historic landmark, Tower Bridge serves not only as a bridge connecting two shores but also as a bridge connecting the past to the present, showcasing London's enduring legacy.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={TowerBridge3} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={TowerBridge4} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">A</span>rchitecture of Tower Bridge

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "Tower Bridge: A Masterpiece of Horace Jones's Architectural Ingenuity"
                            </h2>
                            <p>
                            Tower Bridge's architectural brilliance is a testament to the visionary work of Horace Jones, the renowned architect who designed this iconic structure. Jones's innovative approach combined Gothic and Victorian styles, resulting in a bridge that seamlessly blends functionality with aesthetic appeal. The bridge's striking features include its twin towers with intricate detailing, the bascule mechanism allowing for river traffic, and the elegant suspension elements. Jones's meticulous attention to detail is evident in every aspect of Tower Bridge, from the ornate facades to the carefully crafted walkways offering panoramic views of London. His legacy lives on through this architectural marvel, which continues to inspire awe and admiration among visitors and locals alike, showcasing the timeless allure of Jones's design prowess.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={TowerBridge5} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={TowerBridge6} alt={""} id="port2" />
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

