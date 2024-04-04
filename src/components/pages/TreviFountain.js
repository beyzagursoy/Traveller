import React, { useState } from 'react';
import "../TreviFountain.css";
import Trevi1 from '../../images/Trevi1.jpg';
import Trevi2 from '../../images/Trevi2.jpg';
import TreviHistory from '../../images/TreviHistory.jpg';
import TreviHistory2 from '../../images/TreviHistory2.jpg';
import TreviHeykel from '../../images/TreviHeykel.jpg';
import TreviHeykel2 from '../../images/TreviHeykel2.jpg';
import PiertoBracci from '../../images/PiertoBracci.jpg';
import TreviCizim from '../../images/TreviCizim.jpg';


function TreviFountain() {
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
                <span id="diff">T</span>revi Fountain: Where Wishes Flow into Roman Dreams

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff">E</span>ternal Beauty Flows: Discover Trevi Fountain's Timeless Charm

                            </h2>
                            <p>
                            Trevi Fountain, located in the heart of Rome, Italy, is a captivating masterpiece of Baroque art and architecture. Designed by architect Nicola Salvi and completed by Giuseppe Pannini in the 18th century, the fountain stands as a symbol of the city's grandeur and cultural heritage. Its grandiose structure features a central niche with a majestic statue of Oceanus, surrounded by tritons, sea creatures, and cascading waterfalls. Visitors from around the world are drawn to the fountain's beauty and tradition of tossing a coin over their shoulders into the water, a gesture believed to ensure a return trip to Rome. Illuminated by night, Trevi Fountain exudes a magical ambiance, making it a must-visit landmark that captures the essence of Rome's timeless allure.
                            </p>
                            <p>

                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={Trevi1} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={Trevi2} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">H</span>istory of the Trevi Fountain

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "Trevi Fountain: A Timeless Symphony of Water and History"
                            </h2>
                            <p>
                            Trevi Fountain, one of the most famous fountains in the world, has a rich history dating back to the 18th century. It was commissioned by Pope Clement XII in 1730 and designed by Italian architect Nicola Salvi, with contributions from various sculptors including Pietro Bracci. The fountain is located at the junction of three roads ("tre vie" in Italian, hence the name "Trevi") and marks the terminal point of an ancient Roman aqueduct, the Aqua Virgo.

                            The fountain's design is a stunning example of Baroque artistry, featuring a grandiose facade adorned with statues and bas-reliefs that depict various mythological figures and scenes. The central figure is Oceanus, the god of the seas, riding a chariot pulled by seahorses and accompanied by tritons. The overall composition symbolizes the theme of water's life-giving force and the importance of the aqueduct in supplying water to Rome.

                            One of the most enduring traditions associated with Trevi Fountain is the custom of tossing a coin over one's shoulder into the water. Legend has it that if you toss a coin with your right hand over your left shoulder, you are guaranteed to return to Rome in the future. This tradition has made Trevi Fountain not only a stunning work of art but also a symbol of hope and wishes fulfilled for millions of visitors who flock to admire its beauty every year.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={TreviHistory} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={TreviHistory2} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">S</span>culptures and architecture of the Trevi Fountain

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "Where Sculptures Speak, Architecture Whispers: Trevi's Timeless Elegance"
                            </h2>
                            <p>
                            The Trevi Fountain, located in Rome, Italy, is a masterpiece of Baroque art and architecture. Designed by Italian architect Nicola Salvi and completed by Pietro Bracci, the fountain features a stunning composition of sculptures. At the center stands Oceanus, the god of the sea, riding a chariot pulled by two sea horses, symbolizing the moods of the sea. Flanking Oceanus are two Tritons, one struggling with a sea monster and the other blowing a conch shell. The rest of the fountain is adorned with figures representing Abundance and Salubrity. The entire structure is made of travertine stone, blending harmoniously with its surroundings and creating a mesmerizing spectacle for visitors from around the world.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={TreviHeykel} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={TreviHeykel2} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">A</span>rchitects and sculptors of the Trevi Fountain

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "Architects of Dreams, Sculptors of Splendor: Trevi's Timeless Legacy"
                            </h2>
                            <p>
                            The Trevi Fountain in Rome, Italy, is a masterpiece created by talented architects and sculptors. The fountain's design is primarily attributed to Nicola Salvi, an Italian architect who conceptualized its Baroque style and grandeur. However, due to Salvi's death in 1751, the project was completed by Pietro Bracci, who added the magnificent sculptures that adorn the fountain. The central figure is Oceanus, the god of the sea, depicted in a majestic chariot drawn by two sea horses, symbolizing the power and vastness of the ocean. Flanking Oceanus are two Tritons, mythical sea creatures, one struggling with a sea monster and the other blowing a conch shell. These sculptures, along with others representing Abundance and Salubrity, collectively create a mesmerizing ensemble that embodies the artistic brilliance of the Baroque era and continues to captivate visitors from all over the world.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={PiertoBracci} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={TreviCizim} alt={""} id="port2" />
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


export default TreviFountain;

