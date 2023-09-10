import React from 'react';
import CheckboxFilter from './CheckboxFilter';

const Subject = ({ subject, changeChecked }) => {
  return (
    <div>
      <p>Môn học</p>
      {subject.map((subject) => (
        <CheckboxFilter
          key={subject.id}
          subject={subject}
          changeChecked={changeChecked}
        />
      ))}
    </div>
  );
};

export default Subject;
