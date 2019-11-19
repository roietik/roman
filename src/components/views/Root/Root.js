import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppContext from '../../../context';
import TwittersView from '../TwittersView/TwittersView';
import NotesView from '../NotesView/NotesView';
import ArticlesView from '../ArticlesView/ArticlesView';
import Header from '../../Header/Header';
import Modal from '../../Modal/Modal';
import './Root.module.scss';
import dan from '../../../assets/images/danabramov.jpg';
import ryan from '../../../assets/images/ryanflorence.jpg';
import michael from '../../../assets/images/michaeljackson.jpg';
import kent from '../../../assets/images/kentcdodds.jpg';




class Root extends React.Component {

    state = {
        twitter: [
            {
                title: 'Dan Abramov',
                description: 'Working on @reactjs. The demo guy.',
                image: dan,
                link: 'https://twitter.com/dan_abramov',
            },
            {
                title: 'Ryan Florence',
                description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
                image: ryan,
                link: 'https://twitter.com/ryanflorence',
            },
            {
                title: 'Michael Jackson',
                description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
                image: michael,
                link: 'https://twitter.com/mjackson',
            },
            {
                title: 'Kent C. Dodds',
                description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
                image: kent,
                link: 'https://twitter.com/kentcdodds',
            },
        ],
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
