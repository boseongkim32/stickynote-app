const Note = ({text, time, handleHighlight}) => {
    return (
        <div className='note'>
            <span>{text}</span> 
            <div>
                <footer> 
                    <small>{time}</small>
                    <button className="highlight" onClick={()=>handleHighlight((previousHighlight) => !previousHighlight)} > Highlight </button> 
                </footer>
            </div>
        </div>
    )
};

export default Note;