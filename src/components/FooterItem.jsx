const FooterItem = ({ title, paragraph, children }) => {
    return (
        <div className="footer-item-container">
            <p className="footer-item-title">{ title }</p>
            { children ? children : <p className="footer-item-paragraph">{ paragraph }</p> }
        </div>
    )
}

export default FooterItem