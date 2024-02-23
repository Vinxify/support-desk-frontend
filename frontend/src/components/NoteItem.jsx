import { useSelector } from "react-redux";

function NoteItem({ note }) {
  const { user } = useSelector((state) => state.auth);

  if (note.isStaff) {
    return (
      <div
        className='note'
        style={{
          backgroundColor: "rgba(0,0,0, 0.8)",
          color: "#fff",
        }}
      >
        <h4>Note from Staff 2</h4>
      </div>
    );
  }
  return (
    <div
      className='note'
      style={{
        backgroundColor: note.isStaff ? "rgba(0,0,0, 0.7)" : "#fff",
        color: note.isStaff ? "#fff" : "#000",
      }}
    >
      <h4>
        Note from {note.isStaff ? <span>Staff</span> : <span>{user.name}</span>}
      </h4>
      <p>{note.text}</p>
      <div className='note-date'>
        {new Date(note.createdAt).toLocaleString("en-UK")}
      </div>
    </div>
  );
}

export default NoteItem;
