import React from "react";
import AppContext from '../../../context';
import List from '../../List/List';
import Title from '../../Title/Title'

const NotesView = () => (
    <>
        <Title SectionTitle>Notes View</Title>
        <AppContext.Consumer>
            {(context) => (
                <List items={context.note} />
            )}
        </AppContext.Consumer>
    </>
)

export default NotesView;