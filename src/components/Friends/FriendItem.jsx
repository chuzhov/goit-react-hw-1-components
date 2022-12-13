const GalleryItem = ( { avatar, isOnline, name } ) => {

    return <li className="item">
        <span className="status">{isOnline}</span>
        <div className="avatar-wrapper">
            <img className="avatar" src={avatar} alt="User avatar"/>
        </div>
        <p className="name">{name}</p>
    </li>
}

export default GalleryItem;
    