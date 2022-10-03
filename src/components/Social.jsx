const Social = ({ title='', url='', className }) => {
    return (
        <a className={`social ${className}`} href={ url } target="_blank" rel="noreferrer noopener">
            { title }
        </a>
    )
}

export default Social;