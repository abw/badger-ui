import React from 'react';
import { Todo } from '../../src/components/Debug';
import icons from '../../src/config/icons.js'

export default {
  title: 'Components/Todo',
  component: Todo,
  args: {
    text: 'Jump over the grand canyon on a rocket bike.',
  },
  argTypes: {
    text: {
    },
    title: {
    },
    icon: {
      options: Object.keys(icons),
      control: { type: 'select' },
    },
  },
};

export const Overview = (props) => <>
  <h1 className="mar-t-none mar-l-none">Todo</h1>
  <p className="intro">
    A component to render a TODO message.  It's a wrapper around the
    <code className="code">Debug</code> component with the title and icon
    pre-set.
  </p>
  <Todo {...props} />
</>

export const DefaultTodo = () =>
  <Todo />

export const TodoWithText = () =>
  <Todo text="Climb mount Everest" />

export const TodoWithTitle = () =>
  <Todo title="Bucket List" />

export const TodoWithIcon = () =>
  <Todo icon="badger2" />
