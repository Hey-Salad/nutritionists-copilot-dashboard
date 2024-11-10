import { useState } from 'react';
import { X } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  description: string;
  time: string;
  date: number;
}

const Calendar = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [newEvent, setNewEvent] = useState<Omit<Event, 'id' | 'date'>>({
    title: '',
    description: '',
    time: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedDate && newEvent.title) {
      const event: Event = {
        ...newEvent,
        date: selectedDate,
        id: Date.now()
      };
      setEvents([...events, event]);
      setNewEvent({ title: '', description: '', time: '' });
      setIsModalOpen(false);
    }
  };

  const getEventsForDate = (date: number): Event[] => {
    return events.filter(event => event.date === date);
  };

  const handleDateClick = (date: number): void => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const handleDeleteEvent = (eventId: number): void => {
    setEvents(events.filter(event => event.id !== eventId));
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Calendar</h1>
      </div>

      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="grid grid-cols-7 gap-4">
            {Array.from({ length: 31 }, (_, i) => {
              const date = i + 1;
              const dateEvents = getEventsForDate(date);
              
              return (
                <div
                  key={i}
                  className="min-h-24 border rounded-lg p-2 hover:bg-base-200 cursor-pointer"
                  onClick={() => handleDateClick(date)}
                >
                  <span className="text-sm font-semibold">{date}</span>
                  <div className="mt-1 space-y-1">
                    {dateEvents.map(event => (
                      <div 
                        key={event.id}
                        className="badge badge-primary badge-outline p-1 text-xs w-full"
                      >
                        <div className="flex justify-between items-center w-full">
                          <span className="truncate">{event.title}</span>
                          <button
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation();
                              handleDeleteEvent(event.id);
                            }}
                            className="btn btn-ghost btn-xs"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Daisy UI Modal */}
      <dialog id="event_modal" className={`modal ${isModalOpen ? 'modal-open' : ''}`}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add Event for Day {selectedDate}</h3>
          <form onSubmit={handleAddEvent} className="space-y-4 mt-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Event Title</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                value={newEvent.title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  setNewEvent({ ...newEvent, title: e.target.value })}
                placeholder="Enter event title"
                required
              />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Time</span>
              </label>
              <input
                type="time"
                className="input input-bordered"
                value={newEvent.time}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  setNewEvent({ ...newEvent, time: e.target.value })}
              />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                value={newEvent.description}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  setNewEvent({ ...newEvent, description: e.target.value })}
                placeholder="Enter event description"
              />
            </div>

            <div className="modal-action">
              <button 
                type="button"
                className="btn btn-ghost"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Add Event
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => setIsModalOpen(false)}>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Calendar;