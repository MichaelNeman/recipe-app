import React from 'react';
import App from '../App';



const RecipeList = props =>
    props.list.map(item => (
        <div key="item.id">
            <ul>
                <li>
                    {item.name}
                </li>
            </ul>
        </div>

    ));



export default RecipeList;