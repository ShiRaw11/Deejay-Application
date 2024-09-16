import React, { useState } from 'react';

const EventForm = () => {
  const [title, setTitle] = useState('');
  const [poster, setPoster] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && poster) {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('poster', poster);

      try {
        const response = await fetch('/api/events', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Failed to add event');
        }

        setTitle('');
        setPoster(null);
      } catch (error) {
        console.error('Error adding event:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 p-4 bg-gray-100 rounded shadow-md">
      <input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="file"
        onChange={(e) => setPoster(e.target.files[0])}
        className="p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add Event</button>
    </form>
  );
};

export default EventForm;
