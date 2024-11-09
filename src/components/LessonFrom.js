import React, { useState } from 'react';

function LessonForm({ courseId, addLesson }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addLesson(courseId, { title, isCompleted: false });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Lesson Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button type="submit">Add Lesson</button>
    </form>
  );
}

export default LessonForm;
