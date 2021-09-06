import React from 'react';

export default function Places({ places, onClick }) {
    return(
        <ul>
            {places.map(({ id, name }) => (
                <li key={id}>
                    <button type="button" onClick={() => onClick(name)}>
                        {places.name}
                    </button>
                </li>
            ))}
        </ul>
    )
}