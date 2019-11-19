import React from "react";
import AppContext from '../../../context';
import List from '../../List/List';
import Title from '../../Title/Title'

const TwittersView = () => (
    <>
        <Title SectionTitle>Twitters View</Title>
        <AppContext.Consumer>
            {(context) => (
                <List items={context.twitter} />
            )}
        </AppContext.Consumer>
    </>
)

export default TwittersView;