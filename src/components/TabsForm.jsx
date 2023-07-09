import React, { useState } from 'react'

//props takes the info from app.js and carries into TabsForm for refrence 
function TabsForm(props) {
    const {actives} = props


    // hard coded content into the form (index of pre-typed info)
    const content = [
        'Tab 1 information is now listed here!' ,
        'Tab TWO information is now listed here!' ,
        'Tab 3 information is now listed here!' 
    ]

    //style done on jsx instead of css page
    const myStyle = {
        height: '200px',
        width: '600px',
        border: '1px solid',
        display: 'flex',
        flexDirection: 'row'
    };

    return (
        <div>
            {/* can use: {content[props.actives]} since props is only used once, or complete as done below: */}
            <p style={myStyle}> {content[actives]}</p>
        </div>
    );
}

export default TabsForm















//! May require the following notes from LearnPlatform:
// const MyComponent = props => {
//     const onClickHandler = (e, value) => {
//         alert(value);
//     }

//     return props.movies.map((item, index) => {
//         return <button onClick={(e) => onClickHandler(e, item)}>{item}</button>
//     });
// }

