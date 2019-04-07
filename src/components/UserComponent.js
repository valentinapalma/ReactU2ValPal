import React from 'react';
import { Link } from 'react-router-dom';

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

    // Skapar en lista med individuella användare där varje namn är en länk till UserScreen
    const userList = users.map((user, i) =>
        <li key={i}>
            <Link style={color} className={styles.list} key={i} to={`/user/${user}`}> 
               {user}        
            </Link>
        </li>
    );

    return (
            <div>
                <ul>
                    {userList}
                </ul>
                <button onClick={props.toggleColor} className={styles.toggleButton}>Toggle</button>
            </div>   
    )
}

export default UserComponent;