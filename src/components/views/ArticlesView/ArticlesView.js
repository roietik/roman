import React from "react";
import AppContext from '../../../context';
import List from '../../List/List';
import Title from '../../Title/Title'

const ArticlesView = () => (
    <>
        <Title SectionTitle >Articles View</Title>
        <AppContext.Consumer>
            {(context) => (
                <List items={context.article} />
            )}
        </AppContext.Consumer>
    </>
)

export default ArticlesView;