function CardInfo({icon}) {
    return (
        <div className="card__info">
            <div className="icon__container">
                <i className={`fa fa-${icon}`} aria-hidden="true"></i>
            </div>
            <h4 className="card__title">Lorem, ipsum.</h4>
            <p className="card__text__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, autem!</p>
            <div>
                <a href="#" className="btn btn__outline">Read More
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </a>     
            </div>
        </div>
    );
}

export default CardInfo;