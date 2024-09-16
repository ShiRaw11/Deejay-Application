             
import React from 'react';

const EventsPage = ({ events }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event, index) => (
          <div key={index} className="border rounded overflow-hidden shadow-md">
            <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{event.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;


 
