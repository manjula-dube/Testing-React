import React, { Component } from 'react';
import Link from "./Link"

export default class Layout extends Component {
    render(){    

        return(
            <div>
                 <h1>Testing Components</h1>
                 <Link title="React Berlin Day" url="https://reactday.berlin/#speakers"/>
            </div>
        );
    }
}

