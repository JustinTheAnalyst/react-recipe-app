import React from 'react'
import '../css/pageHeaderStyles.scss';

const PageHeader = ({title}) => {
  return (
    <div className='page-header-container'>
      {title}
    </div>
  )
}

export default PageHeader
