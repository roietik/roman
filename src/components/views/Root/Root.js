import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppContext from '../../../context';
import List from '../../List/List';
import Form from '../../Form/Form';
import TwittersView from '../TwittersView/TwittersVIew';
import NotesView from '../NotesView/NotesView';
import ArticlesView from '../ArticlesView/ArticlesView';
import Header from '../../Header/Header';
import Modal from '../../Modal/Modal';
import './Root.module.scss';

const initState = [
    {
        name: 'Dan Abramov',
        image: "/assets/images/danabramov.jpg",
        description: 'Working on @reactjs. The demo guy.',
        twitterLink: 'https://twitter.com/dan_abramov',
    },
    {
        name: 'Ryan Florence',
        image: '/assets/images/ryanflorence.jpg',
        description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
        twitterLink: 'https://twitter.com/ryanflorence',
    },
    {
        name: 'Michael Jackson',
        image: '/assets/images/michaeljackson.jpg',
        description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
        twitterLink: 'https://twitter.com/mjackson',
    },
    {
        name: 'Kent C. Dodds',
        image: '/assets/images/kentcdodds.jpg',
        description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
        twitterLink: 'https://twitter.com/kentcdodds',
    },
]


class Root extends React.Component {

    state = {
        twitter: [],
        article: [],
        note: [],
        isModalOpen: false    
    }

    addItem = (e, newItem) => {
        e.preventDefault();

        this.setState(prevState => ({
                [newItem.type]: [...prevState[newItem.type], newItem]
        }));

        this.closeModal();
    }

    openModal = () => {
        this.setState({
            isModalOpen: true
        })
    }

    closeModal = () => {
        this.setState({
            isModalOpen: false
        })
    }

    render() {

        const {isModalOpen} = this.state;

        const contextElement = {
            ...this.state,
            addItem: this.addItem
        }

        return (
                <BrowserRouter>
                    <AppContext.Provider value={contextElement}>
                        <Header openModalFn={this.openModal}/>
                        <Switch>
                            <Route exact path="/" component={TwittersView}/>
                            <Route path="/notes" component={NotesView}/>
                            <Route path="/articles" component={ArticlesView}/>
                        </Switch>
                        { isModalOpen && <Modal closeModalFn={this.closeModal} />}
                    </AppContext.Provider>
                </BrowserRouter>
        )
    }
}

export default Root; 
