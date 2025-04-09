import React from 'react'

function EventName({ eventName, text, value, onChange }) {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        width: '100%'
    }

    const labelStyle = {
        color: 'white',
        fontSize: '1rem',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '1px'
    }

    const inputStyle = {
        background: 'transparent',
        border: 'none',
        borderBottom: '2px solid gold',
        padding: '0.5rem 0',
        color: 'white',
        fontSize: '1rem',
        outline: 'none',
        transition: 'all 0.3s ease',
        width: '100%'
    }

    // Add focus style
    const inputFocusStyle = {
        borderBottom: '2px solid white',
    }

    return (
        <div style={containerStyle}>
            <span style={labelStyle}>{eventName}</span>
            <input
                style={inputStyle}
                type={text || 'text'}
                value={value}
                onChange={onChange}
                placeholder={`Enter ${eventName.toLowerCase()}`}
                onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                onBlur={(e) => {
                    e.target.style.borderBottom = '2px solid gold';
                }}
            />
        </div>
    )
}

export default EventName