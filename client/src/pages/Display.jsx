import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './style/Display.scss';
import Header from '../components/header/Header';

function Display() {
  const events = useSelector((store) => store.event.events);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = events?.filter(event => {
    const searchLower = searchTerm.toLowerCase();
    return (
      event?.eventName?.toLowerCase().includes(searchLower) ||
      event?.jobId?.toString().includes(searchTerm)
    );
  });

  return (
    <div className="events-container">
      <Header/>
      <div className="events-header">
        <h1 className="events-title">Event Management</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by event name or job ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button className="search-button">
            <i className="search-icon">🔍</i>
          </button>
        </div>
      </div>
      
      <div className="events-grid">
        {filteredEvents?.length > 0 ? (
          filteredEvents.map((event, index) => (
            <div key={index} className="event-card">
              <div className="event-header">
                <h3 className="event-name">{event?.eventName}</h3>
                <span className="job-id">#{event?.jobId}</span>
              </div>
              <div className="event-body">
                <p className="event-client">
                  <span className="label">Client:</span> 
                  <span className="value">{event?.clientName}</span>
                </p>
                <p className="event-location">
                  <span className="label">Location:</span>
                  <span className="value">{event?.selectedCity}, {event?.selectedHotel}</span>
                </p>
                <p className="event-dates">
                  <span className="label">Dates:</span>
                  <span className="value">
                    {new Date(event?.startDate).toLocaleDateString()} - {new Date(event?.endDate).toLocaleDateString()}
                  </span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="no-events">
            <p>{searchTerm ? 'No matching events found' : 'No events found. Create your first event!'}</p>
            {searchTerm && (
              <button 
                className="clear-search"
                onClick={() => setSearchTerm('')}
              >
                Clear search
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Display;