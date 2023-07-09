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
