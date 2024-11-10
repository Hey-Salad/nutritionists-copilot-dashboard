import React from 'react';

interface Note {
  id: string;
  title: string;
  content: string;
  lastEdited: Date;
}

interface NoteCardProps {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (id: string) => void;
  onClick: (note: Note) => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, onEdit, onDelete, onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    // Prevent click event when clicking buttons
    const target = e.target as HTMLElement;
    if (!target.closest('.btn')) {
      onClick(note);
    }
  };

  return (
    <div 
      className="card bg-base-100 shadow-xl cursor-pointer hover:shadow-2xl transition-shadow duration-200"
      onClick={handleClick}
    >
      <div className="card-body">
        <h2 className="card-title">{note.title}</h2>
        <p className="text-sm text-gray-500">
          Last edited {new Date(note.lastEdited).toLocaleDateString()}
        </p>
        <p className="mt-2 line-clamp-3">{note.content}</p>
        <div className="card-actions justify-end mt-4">
          <button 
            className="btn btn-sm btn-info"
            onClick={(e) => {
              e.stopPropagation();
              onEdit(note);
            }}
          >
            Edit
          </button>
          <button 
            className="btn btn-sm btn-error"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(note.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;