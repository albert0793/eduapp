import design from '../assets/img/design.jpg';
import teacher from '../assets/img/teacher.jpg';
// import teacher from '../assets/img/teacher1.jpg';
function Card(props) {
    return (
        <div className="card__course">
            <div className="image__container">
                <img src={ design } alt="couse-image" />
            </div>
            <div className="card__content">
                <span className="banner">Design</span>
                <h3 className="card__title">Adobe Photoshop Training - Beginner Pro</h3>
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
                    <span className='text'>72 Horas 26 Minutos</span>
                    <span className="icon"><i className="fa fa-calendar"></i></span>
                    <span className='text'>50 Lecturas</span>
                </div>
                <div className='data__teacher'>
                    <div className="teacher__image">
                        <img src={ teacher } alt="" />
                    </div>
                    <div>
                        <span className='teacher__name'>Mike Ross</span>
                    </div>
                </div>
                <span className="line"></span>
                <div className='flex flex__end'>
                    <h3 className="price__course"><span>$</span>50.000</h3>
                    <a href="#" className="btn btn__flex"><i className="fa fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}
export default Card;