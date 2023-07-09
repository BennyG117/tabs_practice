//! Whenever we have a JSX file we can remove "React" - type inference*
import React, { useState } from "react";
import { styled } from "styled-components";
// TODO: find out difference between default import and regular import* curly brackets vs no curly brackets*

const Tab = (props) => {
  //temp session style effect
  const [activeTab, setActiveTab] = useState(0);

  //deconstructing the props for Tabs
  const { tabs, toggleTab } = props;

  //toggle function
  const handleToggle = (i) => {
    console.log("test click");
    setActiveTab(i);
    toggleTab(i);
  };

  // style on page instead of css
  // const myStyle = {
  //     height: '50px',
  //     width: '200px',
  //     border: '1px solid',
  //     display: 'flex',
  //     flexDirection: 'row',
  //     justifyContent: 'center'
  // };

  //! using new name "Div"  (must use back ticks - aka template literal function* ``)
  const Div = styled.div`
    flex: 1;
    border: 1px solid;
    padding: 16px;
    cursor: pointer;
    user-select: none;
    margin-right: 3px;


    &:hover {
      background-color: black;
      color: white;
    }

    &:active {
      p {
        transform: translateY(4px);
      }
    }
    /* height: 50px;
        width: 200px;
        border: 1px solid;
        display: flex;
        flex-direction: row;
        justify-content: center; */
  `;

  const Container = styled.div`
    display: flex;
    max-width: 300px;
    max-height: 50px;
    padding: 10px;
  `;

  //output for the const "Tab"
  return (
    <Container>
      {tabs.map((tab, i) => (
        <Div
          key={i}
          className={`tab-box ${i === activeTab ? "active" : ""}`}
          onClick={() => handleToggle(i)}
        >
          <p className="tabText">{tab.name}</p>
        </Div>
      ))}
    </Container>
  );
};
export default Tab;
