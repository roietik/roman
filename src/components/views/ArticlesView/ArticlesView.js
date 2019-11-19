import React from "react";
import AppContext from '../../../context';

const ArticlesView = () => (
    <AppContext.Consumer>
        {(context) => (
            <h2>Articles View</h2>

        )}
    </AppContext.Consumer>
)

export default ArticlesView;