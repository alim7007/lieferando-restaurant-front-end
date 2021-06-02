import React from 'react'
import fork from '../../../images/fork1.png'
import Button from '../../controls/Button'
import MenuBookIcon from '@material-ui/icons/MenuBook';

const ExclusiveCardsItem = (props) => {
    const { title, img } = props
    return (
        <div className="card">
            <h3 className="card-title">{title}</h3>
            <div className="bar">
                <div className="filledbar"></div>
            </div>
            <div className="square">
                <div className="square-img-container">
                    <img className='initial-img' src={fork} alt="" />
                    <div className="replace-img">
                        <img src={img} alt="" />
                    </div>
                </div>
                <Button cardBtn='cardBtn' buttonStyle='btn--outline' buttonSize='btn--medium' >
                    MENU<span className='icon'><MenuBookIcon /></span>
                </Button>
            </div>
        </div>
    )
}

export default ExclusiveCardsItem
