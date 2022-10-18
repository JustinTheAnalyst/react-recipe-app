import React from 'react'
import PageHeader from '../components/PageHeader';
import Tabs from '../components/Tabs';

// An example of config based approach
const tabsConfig = [
  {
    label: "Product Info",
    content: "1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga laborum asperiores temporibus tempora doloribus natus soluta id perspiciatis voluptas nesciunt quod ab voluptate esse assumenda enim, ex, mollitia maiores similique autem consequuntur saepe sunt consectetur!",
    icon: "😍",
    path: "/",
  },
  {
    label: "Customer Reviews",
    content: "2. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga laborum asperiores temporibus tempora doloribus natus soluta id perspiciatis voluptas nesciunt quod ab voluptate esse assumenda enim, ex, mollitia maiores similique autem consequuntur saepe sunt consectetur!",
    icon: "🤓",
    path: "/about",
  },
  {
      label: "Delivery & Returns",
      content: "3. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga laborum asperiores temporibus tempora doloribus natus soluta id perspiciatis voluptas nesciunt quod ab voluptate esse assumenda enim, ex, mollitia maiores similique autem consequuntur saepe sunt consectetur!",
      icon: "🤓",
      path: "/about",
  },
];

const AboutPage = () => {
  return (
    <>
      <PageHeader title="About" />
      <Tabs tabsConfig={tabsConfig} />
    </>
  )
}

export default AboutPage
