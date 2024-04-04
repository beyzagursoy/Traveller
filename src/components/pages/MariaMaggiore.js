import React, { useState } from 'react';
import "../MariaMaggiore.css";
import Maria from '../../images/Maria.jpg';
import Maria2 from '../../images/Maria2.jpg';
import MariaBesik from '../../images/MariaBesik.jpg';
import MariaBesik2 from '../../images/MariaBesik2.jpg';
import Maria1 from '../../images/Maria1.jpg';
import MariaInside from '../../images/MariaInside.jpg';
import MariaHistory from '../../images/MariaHistory.jpg';
import MariaHistory2 from '../../images/MariaHistory2.jpg';
import MariaMimari from '../../images/MariaMimari.jpg';
import MariaMimari2 from '../../images/MariaMimari2.jpg';

function MariaMaggiore() {
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
                <span id="diff">B</span>asilica di Santa Maria Maggiore: Where History Meets Heaven's Grace

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff">W</span>here Faith and Art Merge: Santa Maria Maggiore, Rome's Timeless Sanctuary

                            </h2>
                            <p>

                                Santa Maria Maggiore, located in Rome, Italy, is one of the most important basilicas in the city and a significant landmark in Christian history. Also known as the Basilica of Saint Mary Major, it is one of the four major basilicas in Rome and holds great religious and architectural significance. The basilica is believed to have been founded in the 5th century after the Virgin Mary appeared in a miraculous snowfall, defining the outline of the church. Santa Maria Maggiore's interior is adorned with stunning mosaics, intricate frescoes, and impressive marble columns, showcasing the rich artistic heritage of Rome. The basilica's grandeur and historical importance make it a must-visit destination for tourists and pilgrims alike, offering a glimpse into centuries of religious devotion and artistic achievement.
                            </p>
                            <p>

                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={Maria} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={Maria2} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">I</span>nterior of the Basilica of Santa Maria Maggiore 

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "A Tapestry of Faith and Art: Discover the Splendor Inside Santa Maria Maggiore"
                            </h2>
                            <p>
                            The interior of the Basilica di Santa Maria Maggiore is a breathtaking display of artistic grandeur and religious devotion. Adorned with magnificent mosaics, intricate frescoes, and ornate marble columns, the basilica's interior is a testament to centuries of craftsmanship and faith. The highlight of the interior is the stunning mosaics that depict scenes from the life of the Virgin Mary, along with biblical narratives and saints' stories. The intricate details and vibrant colors of these mosaics create an awe-inspiring atmosphere, drawing visitors into a world of spiritual beauty and historical significance. With its richly decorated chapels, majestic nave, and reverent ambiance, the interior of Santa Maria Maggiore offers a captivating glimpse into the artistry and devotion of Roman Catholicism.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={Maria1} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={MariaInside} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">R</span>eliquary of the Holy Crib

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "Divine Birthplace Preserved: Santa Maria Maggiore's Sacred Holy Crib"
                            </h2>
                            <p>
                            The Basilica di Santa Maria Maggiore in Rome is renowned for housing the Holy Crib, believed to be the manger where Jesus was laid after his birth. This sacred relic, also known as the Holy Cradle or Holy Crèche, is a cherished symbol of the Nativity and holds great significance for Christians worldwide. According to tradition, the Holy Crib was brought to Rome from Bethlehem in the 7th century and has been venerated at Santa Maria Maggiore ever since. Pilgrims and visitors from around the globe come to witness and pay homage to this precious artifact, which represents the humble beginnings of Christianity and the miracle of Christ's birth.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={MariaBesik} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={MariaBesik2} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            
            <hr id="line" />

            <h2>
                <span id="diff">H</span>istory of the Basilica of Santa Maria Maggiore

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "Echoes of Faith, Centuries of History: Discover Santa Maria Maggiore's Timeless Legacy"
                            </h2>
                            <p>
                                The Basilica di Santa Maria Maggiore has a rich and fascinating history that spans over centuries. According to tradition, the basilica was founded in the 5th century after a miraculous snowfall in August, where the Virgin Mary appeared in a dream to Pope Liberius and a wealthy Roman patrician named John. The snowfall outlined the perimeter of the basilica, leading to its construction on the Esquiline Hill in Rome. Over the years, the basilica underwent several renovations and expansions, incorporating various architectural styles such as Romanesque, Gothic, and Baroque elements. Santa Maria Maggiore also played a significant role in the development of Christian liturgy, being the site where the earliest known Nativity Mass was celebrated. Today, the basilica stands as a testament to centuries of religious devotion and artistic achievement, attracting pilgrims and visitors from around the world.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={MariaHistory} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={MariaHistory2} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">T</span>he architecture of the Basilica of Santa Maria Maggiore

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "Ancient Splendor, Timeless Beauty: Unveil the Architectural Marvels of Santa Maria Maggiore"
                            </h2>
                            <p>
                                
                            The architecture of the Basilica di Santa Maria Maggiore is a fascinating blend of different styles that evolved over centuries. The basilica's original structure dates back to the 5th century, with subsequent additions and renovations contributing to its unique character. The exterior features a majestic façade adorned with intricate details, including columns, statues, and ornate decorations. Inside, visitors are greeted by a vast nave supported by elegant marble columns, leading to the main altar adorned with beautiful artworks. One of the most remarkable aspects of the basilica's architecture is its stunning mosaics, which cover the walls and ceilings, depicting scenes from the Bible and the life of the Virgin Mary. The harmonious fusion of Romanesque, Gothic, and Baroque elements makes Santa Maria Maggiore a masterpiece of architectural evolution and a symbol of Rome's rich cultural heritage.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={MariaMimari} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={MariaMimari2} alt={""} id="port2" />
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


export default MariaMaggiore;

