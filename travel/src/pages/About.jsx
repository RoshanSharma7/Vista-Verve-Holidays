import { FaMountain, FaEye, FaBullseye, FaMapMarkerAlt, FaSmile, FaLeaf, FaHeadset } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
export default function About() {
    return (
        <div className="about-page">
            <Helmet>
                <title>About</title>
            </Helmet>
            <section className="about-hero">
                <FaMountain size={32} />
                <h1>About Vista Verve Holidays</h1>
                <p>
                    Welcome to Vista Verve Holidays, where every journey becomes a memorable experience.
                    Vista Verve Holidays is a travel company dedicated to creating seamless, affordable, and unforgettable travel experiences for individuals, families, couples, and corporate travelers. We believe that travel is more than just visiting destinations—it is about discovering new cultures, creating lifelong memories, and experiencing the world with comfort and confidence.
                    Our team works passionately to design carefully planned domestic and international tour packages that suit every traveler's needs and budget. From relaxing beach vacations and adventurous mountain escapes to cultural explorations and luxury holidays, we ensure every trip is organized with attention to detail and customer satisfaction.
                    At Vista Verve Holidays, we focus on providing personalized travel solutions, transparent pricing, reliable support, and hassle-free booking services. Our goal is to make travel simple, enjoyable, and accessible for everyone.
                    Whether you are planning a family vacation, honeymoon, group tour, weekend getaway, or international adventure, Vista Verve Holidays is your trusted travel partner every step of the way.
                </p>
            </section>

            <section className="about-grid">
                <div className="about-card vision">
                    <FaEye size={24} />
                    <h2>Our vision</h2>
                    <p>
                        Our vision is to become one of India's most trusted and customer-focused travel companies by inspiring people to explore the world with confidence. We aim to redefine travel experiences through innovation, quality service, and sustainable tourism while connecting people with the beauty, culture, and diversity of destinations across India and around the globe.
                    </p>
                </div>

                <div className="about-card mission">
                    <FaBullseye size={24} />
                    <h2>Our mission</h2>
                    <p>
                        At Vista Verve Holidays, our mission is to make travel simple, affordable, and memorable for every traveler. We are committed to delivering personalized travel experiences, exceptional customer service, and carefully planned journeys that create lasting memories. Through honesty, reliability, and attention to detail, we strive to be the trusted travel partner for individuals, families, couples, and corporate travelers.
                    </p>
                </div>
            </section>

            <section className="about-goals">
                <h2>Our goals</h2>
                <div className="goals-grid">
                    <div className="goal-card">
                        <FaMapMarkerAlt size={22} />
                        <p>Expand to 50+ destinations across India and the world</p>
                    </div>
                    <div className="goal-card">
                        <FaSmile size={22} />
                        <p>Achieve 100,000 happy travelers by 2030</p>
                    </div>
                    <div className="goal-card">
                        <FaLeaf size={22} />
                        <p>Promote sustainable and responsible tourism</p>
                    </div>
                    <div className="goal-card">
                        <FaHeadset size={22} />
                        <p>Provide 24/7 customer support on every trip</p>
                    </div>
                </div>
            </section>
        </div>
    );
}