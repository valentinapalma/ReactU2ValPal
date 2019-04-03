import React, { Component } from 'react';
import styles from './ModuleStyling.module.css';

/*
En component som är UI för ett "card" för innehåll.
Det går att toggla show/hide av innehållet med en knapp
*/
class WrapperComponent extends Component {
    constructor() {
        super()
        this.state = {
            showContent: true
        }
    }

    //Skapar toggle funktion som sedan användas i render för att visa/dölja innehåll
    showContent = () => {
        this.setState({
            showContent : !this.state.showContent
        });
    }

    render() {
        return (
            <div className={styles.card}>
                <div>
                    {this.state.showContent && <div> {this.props.children} </div>}
                </div><hr/>

                <div>
                    {this.state.showContent && <button onClick={this.showContent} className={styles.button}>Don't want to see the content? Click here</button>}
                </div>

                <div>
                    {!this.state.showContent && <button onClick={this.showContent} className={styles.button}>Click here to see what this card contains</button>}
                </div>
            </div>
        )
    }
}

export default WrapperComponent;