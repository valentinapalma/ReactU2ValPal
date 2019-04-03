import React from 'react';
import styles from './ModuleStyling.module.css';

/*
Function component som tar emot två props, användare & färg.
Renderar en lista med användare
*/
function UserComponent (props) {
    const users = props.carried.users;
    const color = {
        color: props.carried.color 
    }

    // Skapar en lista med individuella användare
    const userList = users.map((user, i) =>
        <li key={i}>
            {user}
        </li>);

    return (
            <div>
                <ul style={color}>
                    {userList}
                </ul>
                <button onClick={props.toggleColor} className={styles.toggleButton}>Toggle</button>
            </div>   
    )
}

export default UserComponent;