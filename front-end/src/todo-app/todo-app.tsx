import React from 'react';
import { Body } from './body/body';
import { FooterInfo } from './footer-info/footer-info';
import { Footer } from './footer/footer';
import { Header } from './header/header';

export const TodoApp: React.FC = () => {
  return (
    <>
      <section className={'todoapp'}>
        <Header title={'Todos'} />
        <Body />
        <Footer />
      </section>
      <FooterInfo />
    </>
  );
};
