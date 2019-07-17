import React, {Component} from 'react';
import Contact from 'components/contact/contact.js';
import Col from 'components/col/Col.js';
import Grid from 'components/grid/Grid.js';

class CardList extends Component {
    constructor(props){
        super(props);
        this.key = 0;
    }

    render() {
        let cards = <Grid col lg="3" md="4" sm="10" offsetSm="1" offsetMd="0">there are currently no contacts</Grid>,
            pendingCard = null;

        if (this.props.cards) {
            cards = this.props.cards.map((card) => {
                this.key ++;
                return (
                    <Grid col key={this.key} lg="3" md="4" sm="10" offsetSm="1" offsetMd="0">
                        <Contact fullName={card.fullName} email={card.email} phone={card.phone} />
                    </Grid>
                );

            });
        }

        if(this.props.pendingCard){
            pendingCard = (
            <Grid col lg="3" md="4" sm="10" offsetSm="1" offsetMd="0">
                    <Contact className="contact--pending" fullName={this.props.pendingCard.fullName} email={this.props.pendingCard.email} phone={this.props.pendingCard.phone} />
            </Grid>
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