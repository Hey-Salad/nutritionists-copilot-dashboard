import { useState, useEffect } from 'react';
import NoteCard from '../components/NoteCard';

interface Note {
  id: string;
  title: string;
  content: string;
  lastEdited: Date;
  summary?: string;  // Added summary field
}

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [
      { id: '1', title: 'Client Meeting Notes', content: '', lastEdited: new Date() },
      { id: '2', title: 'Meal Plan Ideas', content: '', lastEdited: new Date() },
      { id: '3', title: 'Follow-up Tasks', content: '', lastEdited: new Date() }
    ];
  });
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState<Note | null>(null);
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteContent, setNewNoteContent] = useState('');
  const [isGeneratingSummary, setIsGeneratingSummary] = useState(false);
  const [summary, setSummary] = useState('');
  const [error, setError] = useState<string | null>(null);

  const SUMMARY_API_URL = 'https://us-central1-heysalad.cloudfunctions.net/generateNoteSummary';

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleNewNote = () => {
    setCurrentNote(null);
    setNewNoteTitle('');
    setNewNoteContent('');
    setSummary('');
    setError(null);
    setIsModalOpen(true);
  };

  const handleEditNote = (note: Note) => {
    setCurrentNote(note);
    setNewNoteTitle(note.title);
    setNewNoteContent(note.content);
    setSummary(note.summary || '');
    setError(null);
    setIsModalOpen(true);
  };

  const handleViewNote = (note: Note) => {
    setCurrentNote(note);
    setNewNoteTitle(note.title);
    setNewNoteContent(note.content);
    setSummary(note.summary || '');
    setError(null);
    setIsModalOpen(true);
  };

  const handleSaveNote = () => {
    if (!newNoteTitle.trim()) {
      alert('Please enter a note title');
      return;
    }

    const updatedNote = {
      id: currentNote?.id || Date.now().toString(),
      title: newNoteTitle,
      content: newNoteContent,
      lastEdited: new Date(),
      summary: summary || undefined
    };

    if (currentNote) {
      setNotes(notes.map(note => 
        note.id === currentNote.id ? updatedNote : note
      ));
    } else {
      setNotes([...notes, updatedNote]);
    }
    
    setIsModalOpen(false);
    setCurrentNote(null);
    setNewNoteTitle('');
    setNewNoteContent('');
    setSummary('');
    setError(null);
  };

  const handleDeleteNote = (noteId: string) => {
    if (confirm('Are you sure you want to delete this note?')) {
      setNotes(notes.filter(note => note.id !== noteId));
    }
  };

  const generateSummary = async () => {
    if (!newNoteContent.trim()) {
      setError('Please add some content to generate a summary');
      return;
    }

    setIsGeneratingSummary(true);
    setError(null);

    try {
      const response = await fetch(SUMMARY_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: newNoteTitle,
          content: newNoteContent,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setSummary(data.summary);
    } catch (error) {
      console.error('Error generating summary:', error);
      setError('Failed to generate summary. Please try again.');
    } finally {
      setIsGeneratingSummary(false);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Notes</h1>
        <button 
          className="btn btn-primary"
          onClick={handleNewNote}
        >
          New Note
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            onEdit={handleEditNote}
            onDelete={handleDeleteNote}
            onClick={handleViewNote}
          />
        ))}
      </div>

      {/* Modal */}
      <input 
        type="checkbox" 
        id="note-modal" 
        className="modal-toggle" 
        checked={isModalOpen}
        onChange={() => setIsModalOpen(!isModalOpen)}
      />
      <div className="modal">
        <div className="modal-box max-w-3xl">
          <h3 className="font-bold text-lg">
            {currentNote ? (newNoteTitle || currentNote.title) : 'New Note'}
          </h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Note title"
              className="input input-bordered w-full"
              value={newNoteTitle}
              onChange={(e) => setNewNoteTitle(e.target.value)}
            />
          </div>
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Content</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-48"
              placeholder="Write your note here..."
              value={newNoteContent}
              onChange={(e) => setNewNoteContent(e.target.value)}
            ></textarea>
          </div>
          
          {/* Summary Section */}
          <div className="mt-4">
            <div className="flex flex-col gap-2">
              <button 
                className={`btn btn-secondary w-fit ${isGeneratingSummary ? 'loading' : ''}`}
                onClick={generateSummary}
                disabled={!newNoteContent.trim() || isGeneratingSummary}
              >
                {isGeneratingSummary ? 'Generating...' : 'Generate Summary'}
              </button>
              
              {error && (
                <div className="alert alert-error">
                  <span>{error}</span>
                </div>
              )}
            </div>
            
            {summary && (
              <div className="mt-4 p-4 bg-base-200 rounded-lg">
                <h4 className="font-semibold mb-2">Summary</h4>
                <p className="whitespace-pre-wrap">{summary}</p>
              </div>
            )}
          </div>

          <div className="modal-action">
            <button 
              className="btn btn-ghost"
              onClick={() => {
                setIsModalOpen(false);
                setSummary('');
                setError(null);
              }}
            >
              Cancel
            </button>
            <button 
              className="btn btn-primary"
              onClick={handleSaveNote}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;