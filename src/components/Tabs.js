import React, { useState } from 'react'
import '../css/tabStyles.scss'

const Tabs = ({tabsConfig, defaultIndex}) => {
  // activeIndex – contains the index of active tab, in our case 1,2, or 3. 
  const [activeIndex, setActiveIndex] = useState(defaultIndex ?? 0);

  // handleClick – sets the active index when a tab is clicked.
  const handleClick = (index) => setActiveIndex(index);

  // checkActive – adds the active class for styling and toggling visibility.
  const checkActive = (index, className) => activeIndex === index ? className : "";

  return (
    <>
      <div className="tabs">
        {tabsConfig.map((tab, index) =>(
          <button
            key={`tab-${index}`}
            className={`tab ${checkActive(index, "active")}`}
            onClick={() => handleClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>      

      <div className="panels">
        {tabsConfig.map((tab, index) =>(
          <div key={`tab-panel-${index}`} className={`panel ${checkActive(index, "active")}`}>
            <p>{tab.content}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Tabs
