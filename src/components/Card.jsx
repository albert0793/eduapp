import design from '../assets/img/design.jpg';
import teacherImg from '../assets/img/teacher.jpg';
import path from '../utils/images';
function Card({image, title, category, description, teacher}) {
    return (
        <div className="card__course">
            <div className="image__container">
                <img src={image} alt="" />
            </div>
            <div className="card__content">
                <span className="banner">{category}</span>
                <h3 className="card__title">{title} | {description}</h3>
                <div className="rank">
                    <span className="icon">
                        4.5 <i className="fa fa-star"></i>
                    </span>
                    <span className='text'>
                        1000 <span>Estudiantes</span>
                    </span>
                </div>
                <div className='rank'>
                    <span className="icon"><i className="fa fa-clock-o"></i></span>
                    <span className='text'>72 H/ 26 M</span>
                    <span className="icon"><i className="fa fa-calendar"></i></span>
                    <span className='text'>50 Lecturas</span>
                </div>
                <div className='data__teacher'>
                    <div className="teacher__image">
                        <img src={ teacherImg } alt="" />
                    </div>
                    <div>
                        <span className='teacher__name'>{teacher}</span>
                    </div>
                </div>
                <span className="line"></span>
                <div className='flex flex__end'>
                    <h4 className="price__course"><span>$</span>50.000</h4>
                    <a href="#" className="btn btn__flex"><i className="fa fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}
export default Card;