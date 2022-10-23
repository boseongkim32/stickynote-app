import { useState } from 'react'; 
import NotesList from './components/NotesList';

const App = () => {
  const [notes, setNotes] = useState([
    {
      text: 'first note',
      time: '10:00',
    },
    {
      text: 'second note',
      time: '10:01',
    },    {
      text: 'third note',
      time: '10:02',
    },    {
      text: 'please type within 100 characters',
      time: '10:03',
    },

  ]);

  const [Highlight, setHighlight] = useState(false);

  const addNote = (text) => {
    const time = new Date ();
    const newNote =  {
      text: text, 
      time: time.toLocaleTimeString(),
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes); 
  }

   return (
   <div className='container'>
    <NotesList notes={notes} handleAddNote={addNote} handleHighlight={setHighlight}/> 
   </div>
   );
};
 
export default App;
