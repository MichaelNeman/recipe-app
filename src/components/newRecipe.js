import React from 'react';


class NewRecipe extends React.Component {

    render() {
        return (
            <div className="welcome-page">
                <form>
                    <input type="text" placeholder="add an ingredient" />
                    <input type="button" className="add-ingredient" value="Add" onClick={() => alert("Hi")} />
                    <div className="ingredient-list">
                        <ol className="ingredient-list">
                            <li>2 lbs chicken</li>
                            <li>1 large onion</li>
                            <li>6 cloves garlic</li>
                        </ol>
                    </div>
                    <div>
                        <textarea className="recipe-instructions">Enter recipe instructions here. </textarea>
                    </div>
                    <div>
                        <input type="submit" value="Save" />
                    </div>
                </form>

            </div>
        );
    }
}

export default NewRecipe;