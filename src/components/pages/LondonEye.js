import React, { useState } from 'react';
import "../Collesium.css";
import LondonEye1 from '../../images/LondonEye1.jpg';
import LondonEye2 from '../../images/LondonEye2.jpg';
import LondonEye3 from '../../images/LondonEye3.jpg';
import LondonEye4 from '../../images/LondonEye4.jpg';
import LondonEye5 from '../../images/LondonEye5.jpg';
import LondonEye6 from '../../images/LondonEye6.jpg';

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
                <span id="diff">L</span>ondon Eye: A Spectacular View of London's Skyline

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff">T</span>he Iconic Ferris Wheel on the Thames

                            </h2>
                            <p>
                            The London Eye stands as a symbol of modern London, offering breathtaking views of the city's iconic skyline. Situated on the banks of the River Thames, this colossal Ferris wheel has become a must-visit attraction for tourists and locals alike. As one of the tallest observation wheels globally, the London Eye provides panoramic views of landmarks such as Big Ben, the Houses of Parliament, Buckingham Palace, and the Shard. Visitors can experience the city from a unique perspective, taking in the bustling streets, historic landmarks, and sprawling urban landscape that define London's charm and allure. Whether during the day or illuminated against the night sky, the London Eye promises an unforgettable journey above the heart of the British capital.
                            </p>
                            <p>

                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={LondonEye1} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={LondonEye2} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">H</span>istory of the London Eye

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "London Eye: Where Timeless Views Meet Modern Majesty"

                            </h2>
                            <p>
                            The London Eye, also known as the Millennium Wheel, is an iconic landmark that has become synonymous with the city's skyline. It was conceived as part of London's millennium celebrations in 2000 and was originally intended to be a temporary structure. Designed by architects David Marks and Julia Barfield, the London Eye quickly captured the imagination of people worldwide with its innovative design and breathtaking views. Standing at a height of 135 meters (443 feet), it became the tallest Ferris wheel in Europe upon its opening. Due to its immense popularity and success as a tourist attraction, the London Eye was later made a permanent fixture on the Thames waterfront, offering visitors an unforgettable experience and panoramic views of London's landmarks.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={LondonEye3} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={LondonEye4} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">A</span>rchitecture of the London Eye

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "London Eye: A Skyline Marvel by David Marks and Julia Barfield"
                            </h2>
                            <p>
                            The architecture of the London Eye is a testament to the visionary work of architects David Marks and Julia Barfield. Designed as a modern marvel, the London Eye features a sleek and elegant structure that blends seamlessly with the city's skyline. Marks and Barfield's innovative approach to the Ferris wheel concept resulted in a groundbreaking design that revolutionized the concept of observation wheels worldwide. The use of modern materials and engineering techniques allowed for the creation of a stable and visually stunning attraction, attracting millions of visitors each year to experience the breathtaking views of London from its panoramic capsules.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={LondonEye5} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={LondonEye6} alt={""} id="port2" />
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

