import './Footer.css';
import fb from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';
import insta from '../../assets/instagram.png';
const Footer = () => {
    return (
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>Genre</h4>
                        <a href="/employer">
                            <p>Shoter</p>
                        </a>
                        <a href="/healthplan">
                            <p>MMO</p>
                        </a>
                        <a href="/individual">
                            <p>RPG</p>
                        </a>
                        <a href="/individual">
                            <p>Fighting</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Partner-ship</h4>
                        <a href="/resource">
                            <p>Game-zon-shop</p>
                        </a>
                        <a href="/resource">
                            <p>Epic-Game</p>
                        </a>
                        
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Partners</h4>
                        <a href="/employer">
                            <p>Steam.com</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Organization</h4>
                        <a href="/about">
                            <p>About</p>
                        </a>
                        <a href="/press">
                            <p>Press</p>
                        </a>
                        <a href="/career">
                            <p>Career</p>
                        </a>
                        <a href="/contact">
                            <p>Contact</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Social Media</h4>
                        <div className="socialmedia">
                            <p><img src={fb} alt="" /></p>
                            <p><img src={twitter} alt="" /></p>
                            <p><img src={linkedin} alt="" /></p>
                            <p><img src={insta} alt="" /></p>
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} Game Zone Team. All rights reserved.
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                        <a href="/privacy"><div><p>Privacy</p></div></a>
                        <a href="/security"><div><p>Security</p></div></a>
                        <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;