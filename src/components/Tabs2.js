import React, { useState } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import '../css/tabStyles.scss';

// https://amanexplains.com/how-to-create-an-accessible-tabs-component-in-react/
const Tabs2 = ({tabsConfig, defaultIndex}) => {
    const [selectedIndex, setSelectedIndex] = useState(defaultIndex ?? 0);

    const handleClick = (index) => setSelectedIndex(index);

    const location = useLocation()

    return (
       <>
         <div>
           {tabsConfig.map((tab, index) => (
             <>
                <button
                   key={`tab-${index}`}
                   onClick={() => handleClick(index)}
               >
                   {tab.icon}
                   {tab.label}
               </button>
            </>
           ))}
         </div>

         <div className="tabpanel-wrapper">
           {tabsConfig.map((tab, index) => (
             <section 
                key={`tabpanel-${index}`}
                hidden={selectedIndex !== index}
             >
               {tab.content}
             </section>
           ))}
         </div>

         <div>
            <ul className="tabs">
                {tabsConfig.map((tab, index) => (
                    <Link key={index} to={tab.path}>
                        <li key={index} className={window.location.pathname.includes(tab.path) ? "selected" : undefined}>
                            {tab.label}
                        </li>
                    </Link>
                ))}
            </ul>
         </div>

         <div className="tabpanel-wrapper">
            <Routes location={location}>
                {tabsConfig.map((tab, index) => (
                    <Route path="/" render={props => {
                        return <div key={index} className={"h-100"}>tab.component(props)ccc</div>;
                    }}/>
                ))}
            </Routes>
         </div>
       </>
    );
}

export default Tabs2
