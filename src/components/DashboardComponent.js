import React, { Component } from 'react';
import styles from './ModuleStyling.module.css';
import UserComponent from './UserComponent';
import WrapperComponent from './WrapperComponent';

/*
Renderar alla components som ska renderas, har input, add & remove knapp och innehåller även nuvarande state.
Finns funktioner så som att lägga till, ta bort, toggla färg, 
*/
class DashboardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: ['Red Hot Chili Peppers', 'No Doubt', 'Nirvana'],
            color: '#fff',
            value: ['']
        }
    };

    // Lägger till en användare från input genom att skapa en ny array med den nya användaren.
    addUser = (e) => {
        const newUser = this.state.users.concat(this.state.value);
        this.setState({
            users: newUser,
            value: ''
        })
    };

    // Tar bort användare genom att skapa en ny array där en användare har blivit raderad.
    // Raderar sista användaren i listan
    removeUser = (e) => {
        const removeUser = this.state.users.slice(0, this.state.users.length -1);
        this.setState({users: removeUser})
    };

    //Toggle funktion som varierar mellan två olika text färger
    toggleColor = (e) => {
        this.setState(this.state.color === '#fff' ? {
            color: '#ff9292'
        } : {
            color: '#fff'
        });
    };

    //Skriver ut det som skrivs i inputfältet och konverterar det till ett värde
    handleInput = (e) => {
        this.setState({
            value: e.target.value
        })
    };

    render() {
        return (
            <div className={styles.dashboard}>
                <WrapperComponent>
                    <UserComponent carried={this.state} toggleColor={this.toggleColor}/>
                </WrapperComponent>

                <WrapperComponent>
                    <input 
                        value={this.state.value}
                        type="text"
                        placeholder="Hello. Write to add here!"
                        onChange={this.handleInput}
                        className={styles.input}  />
                    <button 
                        onClick={this.addUser}
                        className={styles.add}>Add</button>
                    <button
                        onClick={this.removeUser}
                        className={styles.remove}>Remove</button>
                </WrapperComponent>
            </div>
        )
    }
}

export default DashboardComponent;