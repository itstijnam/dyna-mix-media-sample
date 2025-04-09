import React, { useState } from 'react';
import './style/Hotel.scss';
import Header from '../components/header/Header';
import EventName from '../components/card/EventName';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import GetButton from '../components/ui/GetButton';
import {useDispatch, useSelector} from 'react-redux';
import { addEvent } from '../redux/eventSlice';

// DatePicker Component
function DateSelector({ label, selectedDate, onChange, minDate, maxDate }) {
    return (
        <div className="form-group">
            <label>{label}</label>
            <DatePicker
                selected={selectedDate}
                onChange={onChange}
                minDate={minDate}
                maxDate={maxDate}
                dateFormat="dd/MM/yyyy"
                className="date-input"
                placeholderText={`Select ${label.toLowerCase()}`}
            />
        </div>
    );
}

function HotelData() {
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedHotel, setSelectedHotel] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [eventName, setEvent] = useState('');
    const [clientName, setClientName] = useState('');
    const [jobId, setJobId] = useState();
    const [errorMessage, setErrorMessage] = useState('');
    const [eventCreated, setEventCreated] = useState([]);

    const {events} = useSelector((store)=> store.event);
    const dispatch = useDispatch();

    const handleEventCreationForm = (e) => {
        e.preventDefault();
        if (!jobId || !eventName || !clientName || !startDate || !endDate || !selectedCity || !selectedHotel) {
            setErrorMessage('Please Fill all the data')
            return;
        }
    
        const newEvent = {
            jobId,
            eventName,
            clientName,
            selectedCity,
            selectedHotel,
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString()
        };
    
        // Dispatch the new event directly
        dispatch(addEvent(newEvent));
    
        // Clear the form
        setJobId('');
        setEvent('');
        setClientName('');
        setSelectedCity('');
        setSelectedHotel('');
        setStartDate(null);
        setEndDate(null);
        setErrorMessage('');
    
        console.log('Event created:', newEvent);
    }

    const CITIES = ["Mumbai", "Delhi", "Bangalore", "Cairo"];
    const HOTELS = {
        "Mumbai": ["Niranta Airport Transit Hotel", "Taj Mahal Tower", "Taj Hotel"],
        "Delhi": ["Ibis New Delhi Aerocity", "Hotel The Royal Plaza", "Red Fox By Lemon Tree Hotels Delhi Airport"],
        "Bangalore": ["Octave Himalaya Monarch", "La Sara Vista"],
        "Cairo": ["Meridien Cairo", "Fairmont Nile City", "Cairo Marriott Hotel", "Novotel Cairo Airport"]
    };

    // Disable dates before today
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return (
        <div className="hotelContainer">
            <Header />
            <div className="eventForm">
                <div className="FormContainer">
                    <EventName
                        eventName='Event Name'
                        value={eventName}
                        onChange={(e) => setEvent(e.target.value)}
                    />
                    <EventName
                        eventName='Client Name'
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                    />
                    <EventName
                        eventName='Assign Job ID'
                        text='number'
                        value={jobId}
                        onChange={(e) => setJobId(e.target.value)}
                    />

                    <div className="form-group">
                        <label>City</label>
                        <select
                            value={selectedCity}
                            onChange={(e) => {
                                setSelectedCity(e.target.value);
                                setSelectedHotel('');
                            }}
                        >
                            <option value="">Select a city</option>
                            {CITIES?.map((city, index) => (
                                <option key={index} value={city}>{city}</option>
                            ))}
                        </select>
                    </div>

                    {selectedCity && (
                        <div className="form-group">
                            <label>Hotel</label>
                            <select
                                value={selectedHotel}
                                onChange={(e) => setSelectedHotel(e.target.value)}
                            >
                                <option value="">Select a hotel</option>
                                {HOTELS[selectedCity]?.map((hotel, index) => (
                                    <option key={index} value={hotel}>{hotel}</option>
                                ))}
                            </select>
                        </div>
                    )}

                    <DateSelector
                        label="Start Date"
                        selectedDate={startDate}
                        onChange={(date) => {
                            setStartDate(date);
                            // Reset end date if it's before the new start date
                            if (endDate && date > endDate) {
                                setEndDate(null);
                            }
                        }}
                        minDate={today}
                    />

                    <DateSelector
                        label="End Date"
                        selectedDate={endDate}
                        onChange={(date) => setEndDate(date)}
                        minDate={startDate || today}
                    />
                    {errorMessage && (
                        <div style={{ color: 'red', margin: '10px 0' }}>
                            {errorMessage}
                        </div>
                    )}
                    <GetButton text={'Create'} workFunction={handleEventCreationForm} />
                </div>
            </div>
        </div>
    );
}

export default HotelData;