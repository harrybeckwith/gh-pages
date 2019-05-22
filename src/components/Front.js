import React from 'react'

const Front = (props) => (

    <div className="front__card" onClick={()=>props.cardClick(props.curr)}>
        <img className="front__img" src={`${props.info.thumbNail}`} alt="" />
        <div className="front__content">
            <p className="text__sm text__light">{props.info.date}</p>
            <h3 className="title--md title__underline__sm">{props.info.title}</h3>
            <div className="front__card__group text__light text__sm">
                {props.info.tag.map((item, index) => (
                    <p key={index}>{item}</p>
                )).reduce((prev, curr) => [prev, ',', curr])}
            </div>
        </div>
     
    </div>

)

export default Front;