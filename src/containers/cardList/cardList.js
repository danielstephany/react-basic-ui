import React, {Component} from 'react';
import Contact from 'components/contact/contact.js';
import MainCol from 'components/mainCol/mainCol.js';

class CardList extends Component {
    constructor(props){
        super(props);
        this.key = 0;
    }

    render() {
        let cards = <MainCol lg="3" md="4" sm="10" offset-sm="1" offset-md="0">there are currently no contacts</MainCol>,
            pendingCard = null;

        if (this.props.cards) {
            cards = this.props.cards.map((card) => {
                this.key ++;
                return (
                    <MainCol key={this.key} lg="3" md="4" sm="10" offset-sm="1" offset-md="0">
                        <Contact fullName={card.fullName} email={card.email} phone={card.phone} />
                    </MainCol>
                );

            });
        }

        if(this.props.pendingCard){
            pendingCard = (
            <MainCol lg="3" md="4" sm="10" offset-sm="1" offset-md="0">
                    <Contact className="contact--pending" fullName={this.props.pendingCard.fullName} email={this.props.pendingCard.email} phone={this.props.pendingCard.phone} />
            </MainCol>
            );
        }

        return (
            <React.Fragment>
                {pendingCard}
                {cards}
            </React.Fragment>
        );
    }
}

export default CardList;