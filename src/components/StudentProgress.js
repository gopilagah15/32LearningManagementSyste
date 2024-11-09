import React from 'react';

function StudentProgress({ courses }) {
  return (
    <div>
      <h2>Student Progress</h2>
      {courses.map(course => (
        <div key={course.id}>
          <h3>{course.title}</h3>
          <ul>
            {course.lessons.map((lesson, index) => (
              <li key={index}>
                {lesson.title} - {lesson.isCompleted ? 'Completed' : 'In Progress'}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default StudentProgress;
