import React, { useState } from 'react';
import "../TreviFountain.css";
import Galleria1 from '../../images/Galleria1.jpg';
import Galleria2 from '../../images/Galleria2.jpg';
import Galleria3 from '../../images/Galleria3.jpg';
import Galleria4 from '../../images/Galleria4.jpg';
import Galleria5 from '../../images/Galleria5.jpg';
import Galleria6 from '../../images/Galleria6.jpg';
import Galleria7 from '../../images/Galleria7.jpg';
import Galleria8 from '../../images/Galleria8.jpg';
import Galleria9 from '../../images/Galleria9.jpg';
import Galleria10 from '../../images/Galleria10.jpg';
import Galleria11 from '../../images/Galleria11.jpg';
import Galleria12 from '../../images/Galleria12.jpg';
import Galleria13 from '../../images/Galleria13.jpg';
import Galleria14 from '../../images/Galleria14.jpg';

function GalleriaBorghese() {
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
                <span id="diff">G</span>alleria Borghese: A Masterpiece Haven of Art and History

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff">W</span>here Art Flourishes Amidst Timeless Beauty: Galleria Borghese's Treasured Legacy

                            </h2>
                            <p>
                                The Galleria Borghese, located in Rome, Italy, is a renowned art museum that houses an impressive collection of sculptures and paintings. Originally built in the early 17th century by the architect Flaminio Ponzio, the building itself is a work of art with its elegant Baroque architecture and lush surroundings in the Villa Borghese gardens. The museum is most famous for its collection of sculptures by Gian Lorenzo Bernini, including his masterpieces such as "Apollo and Daphne" and "David." Additionally, the Galleria Borghese features paintings by prominent artists like Caravaggio, Raphael, and Titian, showcasing the richness and diversity of Italian art through the centuries. With its exquisite artworks displayed in a breathtaking setting, the Galleria Borghese offers visitors a captivating journey through the history of art and culture.
                            </p>
                            <p>

                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={Galleria1} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={Galleria2} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">T</span>he Rape of Proserpina

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "Capturing Mythology's Drama: Bernini's Proserpina in Stone"
                            </h2>
                            <p>
                                "The Rape of Proserpina," housed in the Galleria Borghese, is one of the masterpieces by the renowned Italian artist Gian Lorenzo Bernini. This sculpture depicts the mythological scene of Hades, the god of the underworld (Pluto), abducting Persephone. Bernini's exceptional skill and attention to detail are evident in this work, capturing the intense moment with incredible emotional depth. The desperation of Persephone and the power of Hades are portrayed with exquisite realism, showcasing Bernini's ability to convey dynamic movement in stone. The sculpture's intricate textures and lifelike forms draw viewers into the dramatic narrative, highlighting the Baroque era's emphasis on emotion and theatricality in art. "The Rape of Proserpina" stands as a testament to Bernini's artistic genius and remains a captivating masterpiece that continues to awe and inspire visitors at the Galleria Borghese.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={Galleria3} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={Galleria4} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">A</span>pollo and Daphne

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "Transcending Passion: Bernini's Apollo and Daphne in Stone"
                            </h2>
                            <p>
                                Bernini's "Apollo and Daphne" is a captivating sculpture housed in the Galleria Borghese, depicting the dramatic moment from Ovid's Metamorphoses when Apollo pursues the nymph Daphne, who is transformed into a laurel tree to escape his advances. The sculpture beautifully captures the dynamic movement and emotion of the scene, with Apollo reaching out desperately as Daphne's fingers turn into leaves and branches. The contrast between Apollo's smooth skin and Daphne's bark-like texture adds to the visual impact, emphasizing the theme of metamorphosis and the fleeting nature of desire.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={Galleria5} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={Galleria6} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">V</span>enus Victrix by Canova

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "Elegance Eternalized: Canova's Venus Victrix Reigns in Beauty"
                            </h2>
                            <p>

                                Antonio Canova's "Venus Victrix" is a masterpiece sculpture depicting the goddess Venus in a triumphant pose. Created between 1804 and 1808, the sculpture showcases Canova's mastery of the neoclassical style, with Venus portrayed in a classical contrapposto stance, exuding grace and beauty. The sculpture was commissioned by Napoleon Bonaparte as a portrayal of his wife, Empress Josephine, as Venus, embodying ideals of love, beauty, and victory. Canova's attention to detail, especially in the flowing drapery and delicate features of Venus, creates a sense of elegance and timelessness in the sculpture, making it a celebrated work of art in the neoclassical tradition.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={Galleria7} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={Galleria8} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">B</span>acchanalia of Putti

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "Joyful Revelry in Stone: Bernini's Bacchanalia of Putti"
                            </h2>
                            <p>
                                "Bacchanalia of Putti" is a captivating masterpiece created by the Italian sculptor Lorenzo Bernini. This sculpture, also known as "Bacchanal with a Wine Vat," portrays a joyful and lively scene of putti (cherubic figures) engaged in a celebratory gathering. The putti are depicted playing music, dancing, and enjoying wine, embodying the spirit of revelry and merriment. The dynamic composition and intricate details, such as the cascading drapery and expressive poses of the putti, capture the essence of movement and exuberance. Bernini's skill in sculpting lifelike forms and conveying emotions through stone is evident in this work, making it a cherished piece in the history of Baroque art.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={Galleria9} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={Galleria10} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">F</span>light into Egypt

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "Divine Refuge, Eternal Grace: Caravaggio's Flight into Egypt"
                            </h2>
                            <p>
                                "Flight into Egypt," also known as "The Rest on the Flight into Egypt," is a renowned painting by Italian Baroque artist Caravaggio. Created around 1597-1598, this masterpiece depicts the Holy Family's journey into Egypt to escape King Herod's massacre of infants. The painting portrays Mary, Joseph, and the infant Jesus resting under a tree, with Joseph holding a staff and Mary cradling Jesus in her arms. Caravaggio's use of light and shadow, known as chiaroscuro, creates a dramatic and intimate atmosphere, emphasizing the divine nature of the scene. The painting's emotional depth and realism, combined with Caravaggio's masterful technique, make "Flight into Egypt" a timeless and cherished work of art in Christian iconography.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={Galleria11} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={Galleria12} alt={""} id="port2" />
                    </div>
                </div>
            </div>
            <hr id="line" />

            <h2>
                <span id="diff">C</span>hrist Carried to the Tomb

            </h2>
            <div className="t-row">
                <div className="infobox module">
                    <div className="box">
                        <div className="title">
                            <h2>
                                <span id="diff"></span>
                                "A Moment of Reverence: Carracci's Christ Carried to the Tomb"
                            </h2>
                            <p>
                                
                            "Christ Carried to the Tomb" is a poignant painting by Italian Baroque artist Annibale Carracci. Created in the early 17th century, this masterpiece depicts the solemn moment of Jesus Christ being carried to the tomb after his crucifixion. The painting captures the grief and sorrow of the figures surrounding Christ, emphasizing the emotional weight of the narrative. Carracci's use of light and shadow adds depth and drama to the scene, enhancing the somber atmosphere. The composition conveys a sense of reverence and mourning, inviting viewers to contemplate the themes of sacrifice and redemption central to Christian faith.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="images module">
                    <div className="img1">
                        <img src={Galleria13} alt={""} id="port1" />
                    </div>
                    <div className="img2">
                        <img src={Galleria14} alt={""} id="port2" />
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


export default GalleriaBorghese;

