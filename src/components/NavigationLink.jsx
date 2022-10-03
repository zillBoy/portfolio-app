/**
 * External Dependencies
 * 
 */
import { Link } from "react-router-dom"

const NavigationLink = ({ id, title, to='/', textColor, animation, setAnimation }) => {
    
    return (
        <Link 
            id={ `navigation-link-${id}` }
            className={`navigation-links--link navigation-links--link--${textColor}`} 
            to={ to }
            onMouseOver={ () => setAnimation( id ) } 
            onMouseLeave={ () => setAnimation( '' ) }
        >
            { title }
            <span 
                className={`navigation-links--link--dot navigation-links--link--dot--${(id === animation) && animation}`}
            >
                &#x2022;
            </span>
        </Link>
    )
}

export default NavigationLink