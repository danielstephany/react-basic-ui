import React, {Component} from 'react';
import Contact from 'components/contact/contact.js';
import FlexCol from 'components/flexCol/flexCol.js';

class CardList extends Component {
    constructor(props){
        super(props);
        this.key = 0;
    }

    render() {
        let cards = <FlexCol lg="3" md="4" sm="10" offset-sm="1" offset-md="0">there are currently no contacts</FlexCol>,
            pendingCard = null;

        if (this.props.cards) {
            cards = this.props.cards.map((card) => {
                this.key ++;
                return (
                    <FlexCol key={this.key} lg="3" md="4" sm="10" offset-sm="1" offset-md="0">
                        <Contact fullName={card.fullName} email={card.email} phone={card.phone} />
                    </FlexCol>
                );

            });
        }

        if(this.props.pendingCard){
            pendingCard = (
            <FlexCol lg="3" md="4" sm="10" offset-sm="1" offset-md="0">
                    <Contact className="contact--pending" fullName={this.props.pendingCard.fullName} email={this.props.pendingCard.email} phone={this.props.pendingCard.phone} />
            </FlexCol>
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