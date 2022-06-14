const AddTask = () => {
  return (
    <form className="add-form">
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder=" Add Task" />
      </div>
      <div className="form-control from-control-check">
        <label>Day&Time</label>
        <input type="text" placeholder="Add Day &Time" />
      </div>
      <div className="form-control">
        <label>SetReminder</label>
        <input type="checkbox" placeholder="task" />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
