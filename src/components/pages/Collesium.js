import React, { useState } from 'react';
import "../Collesium.css";
import Collesium1 from '../../images/Collesium1.jpg';
import Collesium2 from '../../images/Collesium2.jpg';
import CollesiumInside from '../../images/CollesiumInside.jpg';
import CollesiumInside2 from '../../images/CollesiumInside2.jpg';
import CollesiumTarih from '../../images/CollesiumTarih.jpg';
import CollesiumTarih2 from '../../images/CollesiumTarih2.jpg';
import CollesiumMimari from '../../images/CollesiumMimari.jpg';
import CollesiumMimari2 from '../../images/CollesiumMimari2.jpg';


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
                <span id="diff">C</span>olosseum: Where History Comes Alive

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff">C</span>olosseum: Echoes of Ancient Glory

                            </h2>
                            <p>
                                The Colosseum, located in Rome, Italy, is an iconic symbol of ancient Roman engineering and culture. Built between 70-80 AD, it was originally known as the Flavian Amphitheatre. This massive oval-shaped amphitheater was used for various public spectacles and entertainment events, including gladiatorial contests, animal hunts, and theatrical performances. With a seating capacity of up to 80,000 spectators, the Colosseum was a marvel of its time, showcasing the architectural prowess and grandeur of the Roman Empire. Today, it stands as one of the most visited historical sites in the world, attracting millions of tourists each year who come to admire its impressive ruins and learn about its rich history.
                            </p>
                            <p>

                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={Collesium1} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={Collesium2} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">I</span>nside the Colosseum

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "Step Into History: Exploring the Heart of the Colosseum"

                            </h2>
                            <p>
                                The interior of the Colosseum is a testament to ancient Roman engineering and entertainment. Its elliptical arena, measuring about 280 feet by 180 feet, was once covered with a wooden floor and adorned with elaborate decorations during spectacles. The seating tiers, divided into different sections based on social status, could accommodate around 50,000 to 80,000 spectators. The underground hypogeum was a complex system of tunnels and chambers where gladiators, animals, and props were kept before their dramatic appearances in the arena. The Colosseum's design allowed for efficient crowd control and facilitated the smooth flow of events, making it an architectural marvel of its time. Today, visitors can explore the ruins and imagine the vibrant scenes that once unfolded within this ancient amphitheater.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={CollesiumInside} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={CollesiumInside2} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">H</span>istory of the Colosseum

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "Colosseum: Where Legends Were Born, History Lives On"
                            </h2>
                            <p>
                                The history of the Colosseum is intertwined with the grandeur and complexity of ancient Rome. Commissioned by Emperor Vespasian in AD 70-80 and completed by his son Titus, this monumental amphitheater was originally known as the Flavian Amphitheatre, reflecting the Flavian dynasty's patronage. The Colosseum's construction utilized innovative techniques and materials, such as concrete and travertine stone, enabling its iconic elliptical shape and towering structure. Throughout its history, the Colosseum hosted a wide range of events, from gladiatorial contests and animal hunts to naval battles recreated on its flooded arena. These spectacles were not only sources of entertainment but also served political and social purposes, showcasing the emperor's power and providing a means to appease and distract the populace.

                                Over the centuries, the Colosseum faced various challenges, including earthquakes, fires, and pillaging for building materials. Despite these hardships, it remained a symbol of Rome's resilience and enduring cultural legacy. In the Middle Ages, the amphitheater was repurposed as a fortress, housing workshops, housing, and religious shrines within its walls. Its significance continued to evolve during the Renaissance and later periods, inspiring artists, architects, and historians with its grandeur and historical significance.

                                Today, the Colosseum stands as a UNESCO World Heritage Site and one of the most iconic landmarks in the world. It serves as a tangible link to ancient Roman civilization, offering visitors a glimpse into the past and a deeper understanding of the ingenuity, artistry, and societal dynamics of one of history's greatest empires.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={CollesiumTarih} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={CollesiumTarih2} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">A</span>rchitectural features of the Colosseum

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "Colosseum: Where Ancient Ingenuity Stands Tall"
                            </h2>
                            <p>
                            The Colosseum, an iconic symbol of ancient Roman architecture, was constructed using travertine limestone blocks, iron clamps, and Roman concrete. Its elliptical shape and towering structure were achieved through innovative engineering techniques. The facade featured Doric, Ionic, and Corinthian columns, while the interior had four stories with 80 arched entrances. The seating tiers were divided by social status, and a retractable awning system called the "velarium" provided shade for spectators. This combination of materials and design elements showcases the advanced craftsmanship and ingenuity of ancient Roman builders, making the Colosseum a timeless masterpiece.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={CollesiumMimari} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={CollesiumMimari2} alt={""} id="port2" />
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

