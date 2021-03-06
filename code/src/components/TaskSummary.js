import React from 'react';
import { useSelector } from 'react-redux';

export const TaskSummary = () => {
  const list = useSelector(store => store.tasks.list);

  const numDone = list.items.filter(item => item.complete).length;

  return (
    <section className="taskSummary">
      <h2>
        {numDone}/{list.items.length} TASKS DONE
      </h2>
    </section>
  )
}
