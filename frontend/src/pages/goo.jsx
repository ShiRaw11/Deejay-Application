import React, { useState, useEffect } from 'react';
import eventsData from '../events.json';

const Events = () => {
    const [filter, setFilter] = useState('upcoming');
    const [filteredEvents, setFilteredEvents] = useState([]);
    const today = new Date();

    useEffect(() => {
        const filtered = eventsData.filter(event => {
            const eventDate = new Date(event.date);
            return filter === 'upcoming' ? eventDate >= today : eventDate < today;
        });
        setFilteredEvents(filtered);
    }, [filter]);

    return (
        <div className="p-4">
            <nav className="flex justify-center mb-6">
                <button
                    className={`mx-2 px-4 py-2 border-b-2 ${
                        filter === 'upcoming' ? 'border-blue-500 font-bold text-blue-600' : 'border-transparent text-gray-500'
                    } hover:text-blue-600 hover:border-blue-500`}
                    onClick={() => setFilter('upcoming')}
                >
                    Upcoming Events
                </button>
                <button
                    className={`mx-2 px-4 py-2 border-b-2 ${
                        filter === 'past' ? 'border-blue-500 font-bold text-blue-600' : 'border-transparent text-gray-500'
                    } hover:text-blue-600 hover:border-blue-500`}
                    onClick={() => setFilter('past')}
                >
                    Past Events
                </button>
            </nav>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredEvents.map((event, index) => (
                    <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
                        <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-48 object-cover"
                            onError={(e) => {
                                console.error(`Image failed to load: ${event.image}`);
                                e.currentTarget.src = '/events/placeholder.png'; // Path to a placeholder image
                            }}
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold">{event.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
