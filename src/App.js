import React, { component } from 'react'
import Content from './Component/Content/Content.js';
import Header from './Component/Header/Header.js';
import TopMenu from './Component/TopMenu/TopMenu.js';

function App() {

  const contents = [
    {
      title: 'For those about to rock...',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.',
      src: 'assets/img/01.jpg'
    },
    {
      title: 'We salute you!',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.',
      src: 'assets/img/02.jpg'
    },
    {
      title: 'Let there be rock!',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.',
      src: 'assets/img/03.jpg'
    },

  ]
  return (
    <div>
      <TopMenu />
      <Header />
      { 
        contents.map((item, index) => {
          <Content key={index} />
        })
      }
    </div>
  );
}

export default App;
