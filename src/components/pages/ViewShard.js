import React, { useState } from 'react';
import "../Collesium.css";
import ViewShard1 from '../../images/ViewShard1.jpg';
import ViewShard2 from '../../images/ViewShard2.jpg';
import ViewShard3 from '../../images/ViewShard3.jpg';
import ViewShard4 from '../../images/ViewShard4.jpg';
import ViewShard5 from '../../images/ViewShard5.jpg';
import ViewShard6 from '../../images/ViewShard6.jpg';
import ViewShard7 from '../../images/ViewShard7.jpg';
import ViewShard8 from '../../images/ViewShard8.jpg';
import ViewShard9 from '../../images/ViewShard9.jpg';
import ViewShard10 from '../../images/ViewShard10.jpg';

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
                <span id="diff">T</span>he View from The Shard: London's Sky-High Panorama

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff">A</span> Spectacular Perspective from Europe's Tallest Building

                            </h2>
                            <p>
                                The View from The Shard offers an unparalleled panorama of London's iconic skyline, providing visitors with a breathtaking experience from Europe's tallest building. Located in the heart of the city, The Shard's observation deck offers a 360-degree view that spans for miles, showcasing landmarks such as Tower Bridge, the River Thames, St. Paul's Cathedral, and beyond. As guests ascend to the observation level via high-speed elevators, they are greeted with a stunning vista that captures the essence of London's vibrant energy and historical landmarks. Whether during the day when the city sparkles under the sun or at night when the skyline is illuminated by a myriad of lights, The View from The Shard offers a memorable perspective that encapsulates the beauty and majesty of London from above.
                            </p>
                            <p>

                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={ViewShard1} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={ViewShard2} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">I</span>ndoor Viewing Gallery

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "Indoor Viewing Gallery: Where London's Majesty Meets Comfort"

                            </h2>
                            <p>
                                The Indoor Viewing Gallery at The Shard provides a unique and comfortable way to experience the majesty of London's skyline. Nestled within the iconic Shard skyscraper, this indoor observatory offers panoramic views of the city's landmarks and urban landscape. Visitors can enjoy the spectacle of London's bustling streets, historic architecture, and modern marvels from the comfort of a climate-controlled environment. The gallery's floor-to-ceiling windows provide uninterrupted views, allowing guests to take in the sights while relaxing in a serene atmosphere. Whether seeking refuge from the elements or simply wanting a cozy vantage point to admire London's beauty, the Indoor Viewing Gallery offers an immersive and memorable experience for all.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={ViewShard3} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={ViewShard4} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">P</span>artially Outdoor Viewing Gallery

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "Partially Outdoor Viewing Gallery: Embrace London's Skyline in Open Air"
                            </h2>
                            <p>
                                The Partially Outdoor Viewing Gallery at The Shard offers a thrilling way to embrace London's skyline in the open air. Situated on the building's upper floors, this unique observatory combines the exhilaration of outdoor views with the comfort of covered spaces. Visitors can step onto the open-air terrace, feel the refreshing breeze, and marvel at panoramic vistas that stretch across the city. From iconic landmarks like the Tower of London to the modern skyscrapers of Canary Wharf, the Partially Outdoor Viewing Gallery provides an immersive experience that captures the dynamic essence of London's urban landscape. For those seeking a blend of excitement and relaxation while taking in the city's beauty, this gallery offers an unforgettable perspective high above the bustling streets below.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={ViewShard5} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={ViewShard6} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">G</span>ŎNG Bar


            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "GŎNG Bar: Elevating Cocktails and Views to New Heights"
                            </h2>
                            <p>
                            GŎNG Bar, perched atop The Shard as one of the highest bars in London, offers a luxurious and unparalleled drinking experience with breathtaking views. The bar's name, inspired by the sound of hitting a gong, sets the tone for an elevated atmosphere where cocktails and vistas merge seamlessly. Guests can savor expertly crafted drinks while gazing out at iconic landmarks and the glittering cityscape below. The sophisticated ambiance, coupled with attentive service and a curated selection of libations, makes GŎNG Bar a favorite destination for those seeking a refined yet exhilarating night out in London. Whether enjoying a classic cocktail or an innovative creation, every sip at GŎNG Bar is accompanied by panoramic views that elevate the senses and create lasting memories.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={ViewShard7} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={ViewShard8} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">S</span>hangri-La Hotel 


            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "Shangri-La Hotel: Where Luxury Meets Serenity in London"
                            </h2>
                            <p>
                            Shangri-La Hotel in London epitomizes luxury and tranquility, offering guests an exquisite retreat in the heart of the city. Nestled within The Shard, one of London's most iconic skyscrapers, the hotel boasts breathtaking views of the capital's skyline from its elevated vantage point. Each room and suite is meticulously designed to provide a harmonious blend of contemporary elegance and timeless comfort, creating a serene oasis for discerning travelers. The hotel's renowned hospitality extends to its world-class amenities, including Michelin-starred dining options, a rejuvenating spa, and personalized service that caters to every guest's needs. Whether staying for business or leisure, Shangri-La Hotel offers an unparalleled experience where every moment is imbued with luxury, sophistication, and a sense of serenity amidst the bustling energy of London.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={ViewShard9} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={ViewShard10} alt={""} id="port2" />
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

