import React, { useState } from 'react';
import "../Collesium.css";
import CoventGarden1 from '../../images/CoventGarden1.jpg';
import CoventGarden2 from '../../images/CoventGarden2.jpg';
import CoventGarden3 from '../../images/CoventGarden3.jpg';
import CoventGarden4 from '../../images/CoventGarden4.jpg';
import CoventGarden5 from '../../images/CoventGarden5.jpg';
import CoventGarden6 from '../../images/CoventGarden6.jpg';
import CoventGarden7 from '../../images/CoventGarden7.jpg';
import CoventGarden8 from '../../images/CoventGarden8.jpg';
import CoventGarden9 from '../../images/CoventGarden9.jpg';
import CoventGarden10 from '../../images/CoventGarden10.jpg';
import CoventGarden11 from '../../images/CoventGarden11.jpg';
import CoventGarden12 from '../../images/CoventGarden12.jpg';
import CoventGarden13 from '../../images/CoventGarden13.jpg';
import CoventGarden14 from '../../images/CoventGarden14.jpg';

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
                <span id="diff">E</span>xploring Covent Garden: London's Vibrant Cultural Hub

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff">A</span> Historic Market Turned Modern Entertainment District

                            </h2>
                            <p>
                                Covent Garden, nestled in the heart of London's West End, is a vibrant and dynamic neighborhood steeped in history and culture. Originally known for its bustling market dating back to the 17th century, Covent Garden has evolved into a modern-day entertainment and shopping destination. The cobblestone streets are lined with an eclectic mix of shops, boutiques, cafes, and restaurants, offering a unique blend of artisanal crafts, fashion, and gourmet delights. The iconic Covent Garden Market, with its charming arcades and street performers, remains a focal point where visitors can immerse themselves in the lively atmosphere and discover a treasure trove of delights. Beyond shopping and dining, Covent Garden is also home to renowned theaters like the Royal Opera House and the London Transport Museum, adding a touch of cultural richness to the area. Whether exploring the historical landmarks, indulging in culinary delights, or enjoying a night out at the theaters, Covent Garden promises an unforgettable experience that captures the essence of London's vibrant spirit.
                            </p>
                            <p>

                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={CoventGarden1} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={CoventGarden2} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">R</span>oyal Opera House

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "Royal Opera House: Where Artistry Takes Center Stage"

                            </h2>
                            <p>
                                The Royal Opera House, located in the heart of Covent Garden, is a world-renowned venue that embodies the pinnacle of artistic excellence. Since its opening in 1732, it has been a beacon of opera and ballet, showcasing the talents of celebrated artists and captivating audiences with unforgettable performances. The grandeur of the Royal Opera House's architecture, with its stunning auditorium and opulent interiors, provides a fitting backdrop for the spectacular productions staged within its walls. From classic operas to contemporary ballets, every performance at the Royal Opera House is a masterful blend of music, dance, and theatricality that transports audiences into a realm of beauty and emotion. As a cultural institution of global acclaim, the Royal Opera House continues to uphold its legacy as a bastion of artistic innovation and storytelling, making it a must-visit destination for lovers of the performing arts.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={CoventGarden3} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={CoventGarden4} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">T</span>heatre Royal Drury Lane

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "Theatre Royal Drury Lane: Where Legends Come to Life on Stage"
                            </h2>
                            <p>
                                Theatre Royal Drury Lane, steeped in history and theatrical grandeur, stands as one of London's most iconic and revered venues. With a history dating back to 1663, it has witnessed centuries of groundbreaking performances and has been home to legendary actors, playwrights, and composers. The theatre's magnificent facade and ornate interiors exude a sense of timeless elegance, setting the stage for unforgettable theatrical experiences. From classic plays and musicals to avant-garde productions, Theatre Royal Drury Lane continues to enchant audiences with its stellar performances and world-class productions. As a cultural landmark that has hosted the likes of Shakespeare, Dickens, and Lloyd Webber, Theatre Royal Drury Lane remains a cornerstone of London's vibrant theatre scene, where the magic of live performance thrives and storytelling comes alive in all its splendor.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={CoventGarden5} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={CoventGarden6} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">S</span>t. Paul's

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "St. Paul's: A Historic Gem in London's Cultural Tapestry"
                            </h2>
                            <p>
                                St. Paul's, commonly known as the Actors' Church, is a cherished landmark nestled in the heart of London's Covent Garden district. Built by architect Inigo Jones in the 17th century, this elegant church has long been associated with the performing arts community, serving as a place of worship and inspiration for actors, musicians, and artists. Its striking neoclassical architecture, highlighted by a magnificent portico and graceful interior, reflects the timeless beauty of London's architectural heritage. Beyond its architectural splendor, St. Paul's Covent Garden holds a special place in the hearts of theater enthusiasts, as it stands adjacent to the historic Theatre Royal Drury Lane. Today, the church continues to host concerts, recitals, and special events, preserving its legacy as a cultural hub where creativity and spirituality converge.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={CoventGarden7} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={CoventGarden8} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">T</span>he Salisbury

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "The Salisbury: A Timeless Pub Experience in Covent Garden"
                            </h2>
                            <p>
                                The Salisbury, located in the vibrant Covent Garden neighborhood of London, is a quintessential English pub renowned for its rich history and charming ambiance. Dating back to the late 19th century, The Salisbury has welcomed patrons with its warm hospitality, traditional decor, and a wide selection of fine ales and spirits. Its cozy interiors, adorned with vintage memorabilia and wooden furnishings, offer a nostalgic glimpse into London's pub culture. Whether enjoying a pint of ale by the fireplace or savoring classic British dishes in the charming dining area, visitors to The Salisbury experience a true taste of old-world charm and conviviality. With its central location near Covent Garden Market and cultural attractions, The Salisbury remains a beloved gathering place for locals and tourists alike, embodying the timeless allure of a classic English pub.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={CoventGarden9} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={CoventGarden10} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">T</span>he Royal Horseguards Hotel

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "The Royal Horseguards Hotel: Where Luxury Meets Historic Elegance"
                            </h2>
                            <p>
                                The Royal Horseguards Hotel, nestled along the banks of the River Thames in London, is a prestigious retreat that seamlessly combines luxury with historic charm. Housed within a stunning Victorian building, this five-star hotel offers an unrivaled experience of opulence and sophistication. From the moment guests step into the grand lobby adorned with crystal chandeliers and marble accents, they are enveloped in a world of timeless elegance. The hotel's meticulously designed rooms and suites feature plush furnishings, modern amenities, and breathtaking views of iconic London landmarks such as the London Eye and Big Ben. The Royal Horseguards Hotel also boasts exquisite dining options, including the award-winning One Twenty One Two restaurant, where guests can indulge in culinary delights crafted from the finest ingredients. Whether sipping cocktails at the elegant bar, unwinding in the tranquil spa, or exploring nearby attractions like Trafalgar Square and Buckingham Palace, every moment at The Royal Horseguards Hotel is a testament to refined luxury and unparalleled hospitality.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={CoventGarden11} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={CoventGarden12} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">T</span>heory

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "Theory Covent Garden: Where Fashion Meets Timeless Style"
                            </h2>
                            <p>
                                Theory Covent Garden is a fashion-forward destination situated in the heart of London's vibrant Covent Garden district. Known for its contemporary yet timeless designs, Theory offers a curated collection of clothing and accessories that embody modern sophistication. The boutique's sleek and minimalist interior creates an inviting atmosphere for shoppers seeking effortless elegance and impeccable craftsmanship. From tailored suits and chic dresses to versatile separates, Theory's pieces are designed to seamlessly transition from day to night, making them a wardrobe staple for fashion enthusiasts. With a commitment to quality fabrics and attention to detail, Theory Covent Garden represents a fusion of artistry and practicality, catering to individuals who appreciate refined style with a modern edge.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={CoventGarden13} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={CoventGarden14} alt={""} id="port2" />
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

