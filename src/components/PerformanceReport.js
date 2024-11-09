import React from 'react';

function PerformanceReport({ courses }) {
  const calculateCompletionRate = () => {
    let totalLessons = 0;
    let completedLessons = 0;

    courses.forEach(course => {
      totalLessons += course.lessons.length;
      completedLessons += course.lessons.filter(lesson => lesson.isCompleted).length;
    });

    return totalLessons === 0 ? 0 : ((completedLessons / totalLessons) * 100).toFixed(2);
  };

  return (
    <div>
      <h2>Performance Report</h2>
      <p>Overall Completion Rate: {calculateCompletionRate()}%</p>
    </div>
  );
}

export default PerformanceReport;
