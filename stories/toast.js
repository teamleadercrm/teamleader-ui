import React from 'react';
import { storiesOf } from '@storybook/react';
import { Store, State } from '@sambego/storybook-state';
import { Button, Toast, Link, ToastContainer } from '../src';

const store = new Store({
  children: [],
});

let key = 0;

const handleCustomAction = () => true;

const handleRemoveToast = keyToRemove => {
  const currentChildren = store.get('children');
  store.set({
    children: currentChildren.filter(child => child.key !== String(keyToRemove)),
  });
};

const handleAddToastWithClose = () => {
  const currentChildren = store.get('children');
  const toastKey = key++;
  const toast = (
    <Toast
      key={toastKey}
      label="Toast label"
      onClose={() => handleRemoveToast(toastKey)}
      timeout={3000}
      onTimeout={() => handleRemoveToast(toastKey)}
    />
  );
  store.set({ children: [...currentChildren, toast] });
};

const handleAddToastWithAction = () => {
  const currentChildren = store.get('children');
  const toastKey = key++;
  const toast = (
    <Toast
      key={toastKey}
      label="Toast label"
      onClose={() => handleRemoveToast(toastKey)}
      timeout={3000}
      onTimeout={() => handleRemoveToast(toastKey)}
      actionLabel="confirm"
      action={handleCustomAction}
    />
  );
  store.set({ children: [...currentChildren, toast] });
};

const handleAddToastWithLink = () => {
  const currentChildren = store.get('children');
  const toastKey = key++;
  const toast = (
    <Toast
      key={toastKey}
      label="Toast label"
      onClose={() => handleRemoveToast(toastKey)}
      timeout={3000}
      onTimeout={() => handleRemoveToast(toastKey)}
      link={<Link href="https://www.teamleader.be">link</Link>}
    />
  );
  store.set({ children: [...currentChildren, toast] });
};

const handleAddToastWithMultilineLabel = () => {
  const currentChildren = store.get('children');
  const toastKey = key++;
  const toast = (
    <Toast
      key={toastKey}
      label="Connection timed out. Showing limited amount of messages."
      onClose={() => handleRemoveToast(toastKey)}
      timeout={3000}
      onTimeout={() => handleRemoveToast(toastKey)}
      actionLabel="Try again"
      action={handleCustomAction}
    />
  );
  store.set({ children: [...currentChildren, toast] });
};

const handleAddToastWithSpinner = () => {
  const currentChildren = store.get('children');
  const toastKey = key++;
  const toast = (
    <Toast key={toastKey} label="Working..." timeout={3000} onTimeout={() => handleRemoveToast(toastKey)} processing />
  );
  store.set({ children: [...currentChildren, toast] });
};

storiesOf('Toast', module)
  .addParameters({
    info: {
      propTablesExclude: [Button, State],
    },
  })
  .add('With close button', () => (
    <div>
      <Button label="Make a toast" onClick={handleAddToastWithClose} />
      <State store={store}>
        <ToastContainer children={[]} />
      </State>
    </div>
  ))
  .add('With custom action', () => (
    <div>
      <Button label="Make a toast" onClick={handleAddToastWithAction} />
      <State store={store}>
        <ToastContainer children={[]} />
      </State>
    </div>
  ))
  .add('With custom link', () => (
    <div>
      <Button label="Make a toast" onClick={handleAddToastWithLink} />
      <State store={store}>
        <ToastContainer children={[]} />
      </State>
    </div>
  ))
  .add('With multiline label', () => (
    <div>
      <Button label="Make a toast" onClick={handleAddToastWithMultilineLabel} />
      <State store={store}>
        <ToastContainer children={[]} />
      </State>
    </div>
  ))
  .add('With loading spinner', () => (
    <div>
      <Button label="Make a toast" onClick={handleAddToastWithSpinner} />
      <State store={store}>
        <ToastContainer children={[]} />
      </State>
    </div>
  ));
