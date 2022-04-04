import React from "react";
import { Todo } from "../../src/components/Debug";
import { Theme } from '../../src/utils'

export default {
  title: 'Theming/Todo'
};

export const ThemedTodo = () => {
  const MyTheme = {
    Todo: {
      icon:     'alert',
      title:    'Things To Be Done',
      fallback: "I haven't got around to this yet"
    },
  };
  return <>
    <h1 className="mar-t-none mar-l-none">Themed Todo</h1>
    <div className="row text-center">
      <div className="split-2 gut-r">
        <h2>Unthemed</h2>
        <Todo className="text-left"/>
      </div>
      <div className="split-2 gut-l">
        <h2>Themed</h2>
        <Theme.Provider {...MyTheme}>
          <Todo className="text-left"/>
        </Theme.Provider>
      </div>
    </div>
  </>
}
