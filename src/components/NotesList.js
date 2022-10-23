import Note from './Note'; 
import AddNote from './AddNote';

const NotesList = ({ notes , handleAddNote }) => {
    return (
        <div className="notes-list">
            {notes.map((note)=> (
                <Note text={note.text} time={note.time}/>
            ))}
            <AddNote handleAddNote={handleAddNote}/> 
        </div>
    );
};

export default NotesList; 