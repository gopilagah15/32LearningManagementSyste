import React, { useState } from 'react';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
import StudentProgress from './components/StudentProgress';
import PerformanceReport from './components/PerformanceReport';

function App() {
  const [courses, setCourses] = useState([]);

  const addCourse = (course) => {
    setCourses([...courses, course]);
  };

  const addLesson = (courseId, lesson) => {
    setCourses(courses.map(course =>
      course.id === courseId ? { ...course, lessons: [...course.lessons, lesson] } : course
    ));
  };

  return (
    <div>
      <h1>Learning Management System</h1>
      <CourseForm addCourse={addCourse} />
      <CourseList courses={courses} addLesson={addLesson} />
      <StudentProgress courses={courses} />
      <PerformanceReport courses={courses} />
    </div>
  );
}

export default App;
