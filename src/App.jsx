//separation of concerns - functions, components, styles
// import logo from './logo.svg';


import './App.css';
import TabsForm from './components/TabsForm';
import Tab from './components/Tabs';
import './tabs.css'
import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTabs = (selectedTab) => {setActiveTab(selectedTab)} 

  const tabs = [
    {name: 'Tab 1'},
    {name: 'Tab 2'},
    {name: 'Tab 3'},
]

  return (
    <div className="App">
      <h2>Click a Tab!</h2>
      <hr/>
      {/* using Tabs.jsx = Toggle Function?*/}
      <Tab tabs={tabs} toggleTab={toggleTabs} />
      <hr/>
      {/* TabsForm using props to pass in the activeTab (which gets us the typed content) */}
      <TabsForm actives={activeTab}/>  
    </div>
  );
}

export default App;
// TODO: Dont write bugs

// TODO: Download a CSS library. The option Im going to use is 'styled-components' / 'mui' : npm packages
// TODO: why styled-components
/**
 * 1.no overlapping class name
 * 2.css style built in syntax 
 * 3. & sign command to activate effects
 * 4.auto complete text when typing (part of the vsCode styled components)
 */