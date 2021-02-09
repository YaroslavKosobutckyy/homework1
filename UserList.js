import React from 'react';
import User from './components/user';

export default function UserList ({DataArt}) {
        const userElement = DataArt.map(DataArt =>
            <li>User DataArt = {DataArt}</li>
        )
return (
    <ul>
        {userElement}
    </ul>
);
}