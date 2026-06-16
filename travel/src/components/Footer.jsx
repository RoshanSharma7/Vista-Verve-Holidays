import { FaFacebook, FaInstagram, FaTwitter, FaAt, } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>Vista Verve Holidays</h3>
          <p>Travel made simple.</p>
        </div>
        <div>
          <h4>Company</h4>
          <p>About</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
        <div>
          <h4>Support</h4>
          <p>Help center</p>
          <p>Cancellation</p>
          <p>Privacy policy</p>
        </div>
        <div>
          <h4>Follow us</h4>
          <div className="footer-socials">
            {/* <FaFacebook size={18} />
            <FaInstagram size={18} />
            <FaTwitter size={18} /> */}
            <a href="https://www.facebook.com/share/1FndfbLTKA/" target="blank"><FaFacebook size={18} /></a>
            <a href="https://www.instagram.com/vistaverveholidays?igsh=NXg1MzZrYncyN2p2" target="blank"><FaInstagram size={18} /></a>
            <a href="https://x.com/Vistaverveholid" target="blank"> <FaTwitter size={18} /></a>
            <a href="https://www.threads.com/@vistaverveholidays" target="blank"><FaAt size={18} /></a>
        
          </div>
        </div>
      </div>
      <div className="footer-bottom">© 2026 Vista Verve Holidays. All rights reserved.</div>
    </footer>
  );
}