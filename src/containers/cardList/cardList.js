import React, {Component} from 'react';
import Contact from 'components/contact/contact.js';
import Col from 'components/col/Col.js';

class CardList extends Component {
    constructor(props){
        super(props);
        this.key = 0;
    }

    render() {
        let cards = <Col lg="3" md="4" sm="10" offsetSm="1" offsetMd="0">there are currently no contacts</Col>,
            pendingCard = null;

        if (this.props.cards) {
            cards = this.props.cards.map((card) => {
                this.key ++;
                return (
                    <Col key={this.key} lg="3" md="4" sm="10" offsetSm="1" offsetMd="0">
                        <Contact fullName={card.fullName} email={card.email} phone={card.phone} />
                    </Col>
                );

            });
        }

        if(this.props.pendingCard){
            pendingCard = (
            <Col lg="3" md="4" sm="10" offsetSm="1" offsetMd="0">
                    <Contact className="contact--pending" fullName={this.props.pendingCard.fullName} email={this.props.pendingCard.email} phone={this.props.pendingCard.phone} />
            </Col>
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