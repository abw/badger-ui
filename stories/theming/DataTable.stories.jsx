import React from "react";
import { DataTable } from "../../src/components/DataTable";
import { Theme } from '../../src/utils'

export default {
  title: 'Theming/DataTable'
};

export const ThemedDataTable = () => {
  const MyTheme = {
    DataTable: {
      initialPageSize: 5,
      trueIcon:         'check',
      falseIcon:        'times',
      trueColor:        'blue',
      falseColor:       'orange',
      trueText:         'Yep',
      falseText:        'Nope',
      booleanClass:     'smallest',
      filterIcon:       'bars',
      clearFilterIcon:  'trash',
      sortIcon:         'angle-left',
      sortUpIcon:       'angle-up',
      sortDownIcon:     'angle-down',
      prevIcon:         'angle-left',
      prevColor:        'orange',
      prevText:         'Back',
      pageColor:        'brown',
      thisPageColor:    'blue',
      nextIcon:         'angle-right',
      nextColor:        'orange',
      nextText:         'Forward',
      disabledColor:    'black',
      solidButtons:     true,
      summaryClass:     'medium'
    },
  };
  const rows = [
    { number: 10,   even: true,  name: 'Ten' },
    { number: 5,    even: false, name: 'Five' },
    { number: 11,   even: false, name: 'Eleven' },
    { number: 100,  even: true,  name: 'One Hundred' },
    { number: 20,   even: true,  name: 'Twenty' },
    { number: 200,  even: true,  name: 'Two Hundred' },
    { number: 2000, even: true,  name: 'Two Thousand' },
    { number: 2001, even: true,  name: 'Two Thousand and One' },
    { number: 2010, even: true,  name: 'Twenty Ten' },
    { number: 2022, even: true,  name: 'Twenty Twenty Two' },
    { number: 2023, even: true,  name: 'Twenty Twenty Three' },
  ];
  const columns = {
    name: {
      type:  'text',
    },
    number: {
      type: 'number',
    },
    price: {
      type: 'price',
      field: 'number',
    },
    pounds: {
      type:  'pounds',
      field: 'number',
    },
    even: {
      type:  'boolean',
      label: 'Even Number',
    },
  };
  return <>
    <h1 className="mar-t-none mar-l-none">Themed DataTable</h1>
    <h2 className="text-center">Unthemed</h2>
      <DataTable
        rows={rows}
        columns={columns}
      />
    <h2 className="text-center">Themed</h2>
    <Theme.Provider {...MyTheme}>
      <DataTable
        rows={rows}
        columns={columns}
      />
    </Theme.Provider>
  </>
}
