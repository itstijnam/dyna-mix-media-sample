import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
    name: 'event',
    initialState: {
        events: []
    },
    reducers: {
        addEvent: (state, action) => {
            state.events.push(action.payload);
        },
        setEvents: (state, action) => {
            state.events = action.payload;
        }
    }
});

export const { addEvent, setEvents } = eventSlice.actions;
export default eventSlice.reducer;