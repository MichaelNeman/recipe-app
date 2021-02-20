import React from 'react';


class NewRecipe extends React.Component {
    render() {
        return (
            <div className="welcome-page">
                <form>
                    <input type="text" placeholder="add an ingredient" />
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