function TodoList({handleSubmit, handleEvent, value}) {
  return (
    <div className="App">
      <form>
        <input type="text" value={value} onChange={handleEvent} />
        <button onClick={() => handleSubmit(value)}>Submit</button>
      </form>
    </div>
  );
}

export default TodoList;
