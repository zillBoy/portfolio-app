/**
 * Internal Dependencies
 * 
 */
import { formatAMPM } from "../utils/utils";
import FooterItem from "./FooterItem";
import Social from "./Social";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-main">
                <FooterItem 
                    title='Version'  
                    paragraph={`${ new Date().getFullYear() } © Edition`}
                />
                <FooterItem 
                    title='Local Time'  
                    paragraph={`${formatAMPM(new Date())} GMT`}
                />
            </div>

            <div className="footer-sub">
                <FooterItem title='Socials'>
                    <Social 
                        title="Behance"
                        url="https://www.behance.net/muhammausmanz/"
                    />
                    <Social 
                        title="LinkedIn"
                        url="https://www.linkedin.com/in/muhammad-usman-28a737177/"
                    />
                    <Social 
                        title="Twitter"
                        url="https://twitter.com/musman0741"
                    />
                    <Social 
                        title="Github"
                        url="https://github.com/zillBoy"
                    />
                </FooterItem>
                
            </div>
        </footer>
    )
}

export default Footer;