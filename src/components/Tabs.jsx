import React, { useState } from 'react'

const Tab = (props) => {
    //temp session style effect
    const [activeTab, setActiveTab] = useState(0);
    
    //deconstructing the props for Tabs
    const { tabs, toggleTab } = props

    //toggle function
    const handleToggle = (i) => {
        console.log("test click");
        setActiveTab(i);
        toggleTab(i)
    };

    // style on page instead of css
    const myStyle = {
        height: '50px',
        width: '200px',
        border: '1px solid',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    };

    //output for the const "Tab"
    return (
        <div style={myStyle}>
            {tabs.map((tab, i) => (
                <div key={i} style={myStyle} className={`tab-box ${i === activeTab ? 'active' : ''}`} onClick={() => handleToggle(i)}>
                    <p className="tabText">{tab.name}</p>
                </div>
            ))}
        </div>
    );
};
export default Tab;

