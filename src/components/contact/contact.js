import React from 'react';
import Card from '../card/card.js';
import BlockContent from '../blockContent/blockContent.js';
import BlockTitle from '../blockTitle/blockTitle.js';
import './contact.scss';
import PropTypes from 'prop-types';

export default function contact(props) {
    const contactClass = props.className ? `contact ${props.className}` : 'contact';

    return(
        <Card className={contactClass}>
            <BlockTitle className="block-title--cream">
                {props.fullName ? <h3>{props.fullName}</h3> : null}
            </BlockTitle>
            <BlockContent>
                <b>email:</b>&nbsp;{props.email ? <span>{props.email}<br /></span> : null}<br/>
                <b>phone:</b>&nbsp;{props.phone ? <span>{props.phone}</span> : null}
            </BlockContent>
        </Card>
    );
}

contact.propTypes = {
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string,
    phone: PropTypes.string
}