import Card from '../components/Card';
import { useState } from 'react';
import data from '../course.json';
function CourseSection(props) {
    const [courses, setCourses] = useState([...data]);
  return (
    <>
      {/* -------------- Courses Section ---------------- */}
      <section className="course__section">
        <h3 className="course__section--title">Todos Nuestros <span className="important">Cursos</span></h3>
        <div className="course__container">
          {/* Courses Cards */}
          {
            // console.log(courses.length)
            courses.map((course, index) => (
              <Card
                key={index}
                // image={images[index]}
                image={course.image}
                description={course.description}
                title={course.name}
                category={course.category}
                teacher={course.teacher}
                price={course.price}
              />
              // console.log(this.state.courses)
            ))
          }
        </div>
      </section>
    </>
  );
}

export default CourseSection;
