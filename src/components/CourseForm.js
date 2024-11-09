import React, { useState } from 'react';

function CourseForm({ addCourse }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addCourse({ id: Date.now(), title, lessons: [], quizzes: [] });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Course Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button type="submit">Add Course</button>
    </form>
  );
}

export default CourseForm;
