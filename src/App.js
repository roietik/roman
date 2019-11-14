import React from 'react';
import ListWrapper from './components/ListWrapper/ListWrapper';
import Form from './components/Form/Form'
import './App.css';

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


class App extends React.Component {

    state = {
        items: [...initState]
    }

    addItem = (e) => {
        e.preventDefault();

        const newItem =     {
            name: e.target[0].value,
            twitterLink: e.target[1].value,
            image: e.target[2].value,
            description: e.target[3].value,
        }
        console.log(newItem);

        this.setState(
            prevState => (
                {items: [...prevState.items, newItem]}
            )
        )
        e.target.reset();
    }

    render() {
        return (
            <>
                <ListWrapper items={this.state.items} />
                <Form submitFn={this.addItem} />
            </>
        )
    }
}

export default App;
