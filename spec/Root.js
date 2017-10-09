import React from 'react';
import Navigation from './Navigation';
import Content from './Content';
import s from './styles.css';
import Section from './Section';

// components
import Button from './components/button';
import Counter from './components/counter';
import Typography from './components/typography';
import Menu from './components/menu';
import Dialog from './components/dialog';
import PopoverVertical from './components/popoverVertical';
import PopoverHorizontal from './components/popoverHorizontal';
import LoadingMolecule from './components/loadingMolecule';
import Radio from './components/radio';
import SectionTest from './components/section';
import StatusLabelTest from './components/statusLabel';
import StatusBulletTest from './components/statusBullet';
import IslandTest from './components/island';
import MessageTest from './components/message';
import Toast from './components/toast';

const Root = () => (
  <div className={s.root}>
    <Navigation />
    <Content>
      <h1>Teamleader UI v{__VERSION__}</h1>
      {__DEV__}

      <Section id="buttons">
        <Button />
      </Section>
      <Section id="counters">
        <Counter />
      </Section>
      <Section id="dialogs">
        <Dialog />
      </Section>
      <Section id="islands">
        <IslandTest />
      </Section>
      <Section id="loading-molecules">
        <LoadingMolecule />
      </Section>
      <Section id="menus">
        <Menu />
      </Section>
      <Section id="messages">
        <MessageTest />
      </Section>
      <Section id="popovers">
        <PopoverVertical />
      </Section>
      <Section>
        <PopoverHorizontal />
      </Section>
      <Section id="radios">
        <Radio />
      </Section>
      <Section id="sections">
        <SectionTest />
      </Section>
      <Section id="status-labels">
        <StatusLabelTest />
      </Section>
      <Section id="status-bullets">
        <StatusBulletTest />
      </Section>
      <Section id="toasts">
        <Toast />
      </Section>
      <Section id="typography">
        <Typography />
      </Section>
    </Content>
  </div>
);

export default Root;
