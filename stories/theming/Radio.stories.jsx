import React from 'react';
import { Radio, RadioState } from '../../src/components/Radio';
import { Theme } from '../../src/utils'

export default {
  title: 'Theming/Radio'
};

export const ThemedRadio = () => {
  const [radio1, setRadio1] = React.useState(0);
  const [radio2, setRadio2] = React.useState(0);
  const MyTheme = {
    Radio: {
      checkedIcon:   'check',
      uncheckedIcon: 'times',
    }
  };
  const options = [
    { text: 'Ten',    value: 10 },
    { text: 'Twenty', value: 20 },
    { text: 'Thirty', value: 30 },
  ];
  return <>
    <h1 className="mar-t-none mar-l-none">Themed Radio Sets</h1>
    <div className="row text-center">
      <div className="split-2 gut-r">
        <h2>Unthemed</h2>
        <h5>Radio</h5>
        <Radio
          value={radio1} options={options}
          onChange={option => setRadio1(option.value)}
        />
        <h5 className="mar-t">RadioState</h5>
        <RadioState options={options}/>
      </div>
      <div className="split-2 gut-l">
        <h2>Themed</h2>
        <Theme.Provider {...MyTheme}>
          <h5>Radio</h5>
          <Radio
            value={radio2} options={options}
            onChange={option => setRadio2(option.value)}
          />
          <h5 className="mar-t">RadioState</h5>
          <RadioState options={options}/>
        </Theme.Provider>
      </div>
    </div>
  </>
}
