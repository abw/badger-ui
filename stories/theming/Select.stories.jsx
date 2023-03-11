import React from 'react';
import { Select, SelectState } from '../../src/components/Select';
import { Theme } from '../../src/utils'

export default {
  title: 'Theming/Select'
};

export const ThemedSelect = () => {
  const [value1, setValue1] = React.useState(false);
  const [value2, setValue2] = React.useState(false);
  const options = [
    { text: 'Ten',    value: 10 },
    { text: 'Twenty', value: 20 },
    { text: 'Thirty', value: 30 },
  ];
  const MyTheme = {
    Select: {
      openIcon:  'angle-up',
      closedIcon:  'angle-down',
    },
  };
  return <>
    <h1 className="mar-t-none mar-l-none">Themed Select</h1>
    <div className="row text-center pad-b-10">
      <div className="split-2 gut-r">
        <h2>Unthemed</h2>
        <h5>Select</h5>
        <Select
          value={value1} options={options}
          onChange={option => setValue1(option.value)}
        />
        <h5 className="mar-t">SelectState</h5>
        <SelectState options={options}/>
      </div>
      <div className="split-2 gut-l">
        <h2>Themed</h2>
        <Theme.Provider {...MyTheme}>
          <h5>Select</h5>
          <Select
            value={value2} options={options}
            onChange={option => setValue2(option.value)}
          />
          <h5 className="mar-t">SelectState</h5>
          <SelectState options={options}/>
        </Theme.Provider>
      </div>
    </div>
  </>
}
