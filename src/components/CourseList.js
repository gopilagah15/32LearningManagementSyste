import React from 'react'; 
import LessonForm from './LessonFrom';
function CourseList({ courses, addLesson }) {
  return (
    <div>
      <h2>Courses</h2>
      {courses.map(course => (
        <div key={course.id}>
          <h3>{course.title}</h3>
          <LessonForm courseId={course.id} addLesson={addLesson} />
          <ul>
            {course.lessons.map((lesson, index) => (
              <li key={index}>{lesson.title}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default CourseList;
