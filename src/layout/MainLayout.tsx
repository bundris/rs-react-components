import React from 'react';
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';

class MainLayout extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Content />
      </>
    );
  }
}

export default MainLayout;
