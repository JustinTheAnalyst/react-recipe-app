import React from 'react'
import Tabs2 from '../components/Tabs2';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import PageHeader from '../components/PageHeader';

// An example of config based approach
const tabsConfig = [
    {
      label: "Product Info",
      content: "1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga laborum asperiores temporibus tempora doloribus natus soluta id perspiciatis voluptas nesciunt quod ab voluptate esse assumenda enim, ex, mollitia maiores similique autem consequuntur saepe sunt consectetur!",
      icon: "😍",
      path: "/",
      component: () => <HomePage />,
    },
    {
      label: "Customer Reviews",
      content: "2. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga laborum asperiores temporibus tempora doloribus natus soluta id perspiciatis voluptas nesciunt quod ab voluptate esse assumenda enim, ex, mollitia maiores similique autem consequuntur saepe sunt consectetur!",
      icon: "🤓",
      path: "/about",
      component: () => <AboutPage />,
    },
    {
        label: "Delivery & Returns",
        content: "3. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga laborum asperiores temporibus tempora doloribus natus soluta id perspiciatis voluptas nesciunt quod ab voluptate esse assumenda enim, ex, mollitia maiores similique autem consequuntur saepe sunt consectetur!",
        icon: "🤓",
        path: "/about",
        component: () => <AboutPage />,
    },
];

const TabsPage = () => {
  return (
    <>
        <PageHeader title="Tabs" />
        <Tabs2 tabsConfig={tabsConfig} />
    </>
  )
}

export default TabsPage
