import { useState } from "react";

const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('');
    const handleChange = (event) => {
        setNoteText(event.target.value);
    };
    const handlePostClick = () => {
        if (noteText.length>100) {
            handleAddNote("too long");
            setNoteText('');
        } else {
            handleAddNote(noteText);
            setNoteText('');
        }
    }
    return (
        <div className="note new">
            <textarea 
            rows="8" cols="10" placeholder="Start typing"
            value = {noteText}
            onChange={handleChange}
            ></textarea>
            <div className="note-footer">
                <button className="post" onClick={handlePostClick}> Post </button>
            </div>
        </div>
    );
};

export default AddNote;

