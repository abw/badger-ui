import React from 'react';
import { useState } from 'react';
import { Checkbox } from '../../src/components/Checkbox';
import { DataTable } from '../../src/components/DataTable';
import { stringSort } from '../../src/components/DataTable/Sort';

export default {
  title: 'Components/DataTable',
  component: DataTable,
};

export const Overview = () => <>
  <h1 className="mar-t-none mar-l-none">Data Table</h1>
  <p className="intro">
    This component renders a table of data with support for sorting, filtering and pagination.
    It is designed to be simple and relatively easy to use.  If you want to do more gnarly
    table stuff then <a href="https://react-table.tanstack.com/">react-table</a> may be what
    you're looking for.
  </p>
</>

export const SimpleDatatable = () => {
  const rows = [
    { id: 10,  hex: '0xA',  name: 'Ten' },
    { id: 11,  hex: '0xB',  name: 'Eleven' },
    { id: 20,  hex: '0x14', name: 'Twenty' },
    { id: 100, hex: '0x64', name: 'One Hundred' }
  ];
  const columns = {
    id: {
      type: 'id',
      label: 'ID',
    },
    name: {
      // type defaults to 'text'
      // label defaults to 'Name'
    },
    hex: {
      hidden: true
    },
  };
  return <>
    <p className="mar-t-none">
      The <code className="code">DataTable</code> component should be passed an
      array of <code className="code">rows</code> containing the data to be displayed
      and an object defining the <code className="code">columns</code> that should be
      displayed for each item.
    </p>
    <p>
      The <code className="code">rows</code> items are objects
      that can contain any data.  The <code className="code">columns</code> entries
      don't have any mandatory parameters.
      An optional <code className="code">label</code> can be specified for the
      column heading, otherwise a capitalised form version of the column name is used.
      An optional <code className="code">type</code> can be used to
      determine how the data is displayed and sorted.  The default <code className="code">type</code> is{' '}
      <code className="code">text</code>.  This example uses the <code className="code">id</code> type
      for displaying numerical record IDs.
      A <code className="code">hidden</code> boolean value can be specified to indicate if the
      column is initially hidden.
    </p>
    <DataTable
      rows={rows}
      columns={columns}
    />
  </>
}

export const DataTypes = () => {
  const rows = [
    { number: 10,  even: true,  name: 'Ten' },
    { number: 5,   even: false, name: 'Five' },
    { number: 11,  even: false, name: 'Eleven' },
    { number: 100, even: true,  name: 'One Hundred' },
    { number: 20,  even: true,  name: 'Twenty' },
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
    <p className="mar-t-none">
      The <code className="code">type</code> for a column can be set
      to <code className="code">number</code> for numbers which will be
      right-align and sorted numerically.  Other numerical types include{' '}
      <code className="code">id</code> for numerical identifiers (narrow column
      width), <code className="code">price</code> for prices (displayed with
      pound sign and comma to separate thousands) and <code className="code">pounds</code> which
      is the same as <code className="code">price</code> except that it only displays
      whole pounds.
    </p>
    <p>
      In this example, the <code className="code">price</code> and <code className="code">pounds</code> columns
      display the values in the <code className="code">number</code> field of the <code className="code">rows</code>.
      This is done by setting the <code className="code">field</code> in the column definitions for{' '}
      <code className="code">price</code> and <code className="code">pounds</code> to <code className="code">number</code>.
    </p>
    <p>
      The <code className="code">boolean</code> data type displays a boolean value as a narrow,
      centre-aligned label.  See below for how to define other display styles.
    </p>
    <DataTable
      rows={rows}
      columns={columns}
    />
  </>
}

export const ColumnProperties = () => {
  const rows = [
    { forename: 'Bobby', surname: 'Badger' },
    { forename: 'Simon', surname: 'Stoat'  },
    { forename: 'Frank', surname: 'Ferret' },
  ];
  const columns = {
    forename: {
      headClass: 'red',
      bodyClass: 'green'
    },
    surname: {
      className: 'bold text-center',
    },
  };
  return <>
    <p className="mar-t-none">
      A column can define <code className="code">headClass</code> and <code className="code">bodyClass</code> properties
      to have those CSS classes added to the head and body cells respectively.
      The <code className="code">className</code> property can be used to add a CSS class to both.
    </p>
    <DataTable
      rows={rows}
      columns={columns}
    />
  </>
}

export const CustomColumnDisplay = () => {
  const rows = [
    { id: 130, forename: 'Brian', surname: 'Badger' },
    { id: 120, forename: 'Bobby', surname: 'Badger' },
    { id: 140, forename: 'Simon', surname: 'Stoat'  },
    { id: 100, forename: 'Frank', surname: 'Ferret' },
  ];
  const columns = {
    id: { },
    name: {
      field: 'surname',
      display: ({row}) => row.forename + ' ' + row.surname,
    },
    code: {
      field: 'id',
      display: ({name, field, value}) => <span>{name} is <code className="code">{field}={value}</code></span>,
    }
  };
  return <>
    <p className="mar-t-none">
      A column can define a <code className="code">display</code> property as a
      function to customise how the cell content is displayed.
      The function is passed an object containing the <code className="code">row</code> data,
      the <code className="code">column</code> specification, the column <code className="code">name</code>,
      the data <code className="code">field</code> (which is the same as <code className="code">name</code> if
      the column doesn't define a separate <code className="code">field</code>) and the
      row <code className="code">value</code> (the same as <code className="code">row[field]</code>).  It
      should return the markup to display in the cell.
    </p>
    <p>
      Note that the sort order and filtering options for this column may not work as expected.
      In this example we define the <code className="code">field</code> for each column which
      will be used for sorting and filtering the rows.  Note the limitation of this approach.  For
      example, the <code className="code">name</code> column only looks at the surname when
      sorting or filtering.  Read on for the a better solution to this problem...
    </p>
    <DataTable
      rows={rows}
      columns={columns}
    />
  </>
}

export const CustomColumnSort = () => {
  const rows = [
    { id: 130, forename: 'Brian', surname: 'Badger' },
    { id: 120, forename: 'Bobby', surname: 'Badger' },
    { id: 140, forename: 'Simon', surname: 'Stoat'  },
    { id: 100, forename: 'Frank', surname: 'Ferret' },
  ];
  const sortSurname = stringSort("surname");
  const sortForename = stringSort("forename");
  const columns = {
    id: { },
    name: {
      field: 'surname',
      display: ({row}) => row.forename + ' ' + row.surname,
      sort: (a, b) => sortSurname(a, b) || sortForename(a, b)
    },
    code: {
      field: 'id',
      display: ({name, field, value}) => <span>{name} is <code className="code">{field}={value}</code></span>,
      sort: (a, b) => a.id - b.id
    }
  };
  return <>
    <p className="mar-t-none">
      You can define a custom <code className="code">sort</code> function
      for columns.  This is particularly relevant when defining custom <code className="code">display</code> properties
      for columns.
      The function is a standard Javascript sort function which is passed two
      rows, <code className="code">a</code> and <code className="code">b</code>, and should
      return <code className="code">-1</code>, <code className="code">0</code> or <code className="code">1</code> if{' '}
      <code className="code">a</code> is less than, equal to, or greater than <code className="code">b</code>, respectively.
    </p>
    <p>
      The sorting for the <code className="code">name</code> column in this example uses
      the <code className="code">stringSort()</code> function exported by
      the <code className="code">DataTable/Sort</code> module.  This generate a string comparison
      function which looks at the named field in each row.  We create one function to sort on
      the <code className="code">surname</code> and another to sort on the <code className="code">forename</code>.
      The <code className="code">sort</code> function calls the first to sort by surname, and if they are
      equal (i.e. the <code className="code">sortSurname()</code> function returns <code className="code">0</code>)
      then it calls the <code className="code">sortForename()</code> function to sort by forename.
    </p>
    <DataTable
      rows={rows}
      columns={columns}
    />
  </>
}

export const CustomColumnFilter = () => {
  const rows = [
    { id: 130, forename: 'Brian', surname: 'Badger' },
    { id: 120, forename: 'Bobby', surname: 'Badger' },
    { id: 140, forename: 'Simon', surname: 'Stoat'  },
    { id: 100, forename: 'Frank', surname: 'Ferret' },
  ];
  const columns = {
    id: { },
    name: {
      display: ({row}) => row.forename + ' ' + row.surname,
      filter: ({row, search}) => row.surname.toLowerCase().match(search) || row.forename.toLowerCase().match(search),
    },
  };
  return <>
    <p className="mar-t-none">
      You can also define a custom <code className="code">filter</code> function
      for columns.  This is also relevant when defining custom <code className="code">display</code> properties
      for columns.  The function will be passed the <code className="code">row</code> data,
      the <code className="code">field</code> name, the <code className="code">value</code> of that
      field and the <code className="code">search</code> string.
    </p>
    <DataTable
      rows={rows}
      columns={columns}
    />
  </>
}

export const RowClass = () => {
  const rows = [
    { forename: 'Nigel', surname: 'Tufnel',     instrument: 'Guitar' },
    { forename: 'David', surname: 'St Hubbins', instrument: 'Guitar' },
    { forename: 'Derek', surname: 'Smalls',     instrument: 'Bass'   },
  ];
  const columns = {
    forename:   { },
    surname:    { },
    instrument: { },
  };
  return <>
    <p className="mar-t-none">
      The <code className="code">rowClass</code> property can be provided as a
      function to set a CSS class on a row.  It receives the row data as an
      parameter and should return the CSS class.  In this example we add
      the <code className="code">positive</code> class to the band member
      who play guitar.  They go up to eleven.  It's one louder.
    </p>
    <DataTable
      rows={rows}
      columns={columns}
      rowClass={ row => row.instrument === 'Guitar' ? 'positive' : '' }
    />
  </>
}

export const RowSelection = () => {
  const rows = [
    { name: 'Bobby', animal: 'Badger' },
    { name: 'Simon', animal: 'Stoat'  },
    { name: 'Frank', animal: 'Ferret' },
  ];
  const columns = {
    name: {
      label: 'Name',
    },
    animal: {
      label: 'Animal',
    },
  };
  return <>
    <p className="mar-t-none">
      Specify a <code className="code">rowClick</code> handler if you want to be able to
      select a row by clicking on it.
    </p>
    <DataTable
      rows={rows}
      columns={columns}
      rowClick={row => window.alert('You clicked on ' + row.name + ' the ' + row.animal)}
    />
  </>
}

export const Pagination = () => {
  const rows = [
    { name: 'Alice', animal: 'Aardvark' },
    { name: 'Bobby', animal: 'Badger' },
    { name: 'Carmen', animal: 'Camel'  },
    { name: 'Derek', animal: 'Dog'  },
    { name: 'Edward', animal: 'Elephant'  },
    { name: 'Frank', animal: 'Ferret' },
    { name: 'Gerry', animal: 'Gerbil' },
    { name: 'Harry', animal: 'Horse' },
    { name: 'Ian', animal: 'Iguana' },
    { name: 'Jack', animal: 'Jaguar' },
    { name: 'Kelly', animal: 'Kangaroo' },
    { name: 'Leon', animal: 'Llama' },
    { name: 'Martin', animal: 'Moose' },
    { name: 'Nigel', animal: 'Narwhal' },
    { name: 'Oliver', animal: 'Octopus' },
    { name: 'Peter', animal: 'Preying Mants' },
    { name: 'Quentin', animal: 'Quail' },
    { name: 'Roger', animal: 'Rhino' },
    { name: 'Sally', animal: 'Stringray' },
    { name: 'Terry', animal: 'Turtle' },
    { name: 'Ursula', animal: 'Uakari' },
    { name: 'Victor', animal: 'Velociraptor' },
    { name: 'Wendy', animal: 'Whale' },
    { name: 'Xavier', animal: 'Xerus' },
    { name: 'Yasmin', animal: 'Yak' },
    { name: 'Zelda', animal: 'Zebra' },
  ];
  const columns = {
    name: {
      label: 'Name',
    },
    animal: {
      label: 'Animal',
    },
  };
  return <>
    <p className="mar-t-none">
      This example shows the paging in action.
    </p>
    <DataTable
      rows={rows}
      columns={columns}
    />
  </>
}

export const WideTable = () => {
  const [scrollX, setScrollX] = useState(true);
  const rows = [
    { name: 'Alice',  animal: 'Aardvark', colour: 'Grey',
      interests: 'Aardvarking, Walking, Eating, Drinking',
      number: 12345,
    },
    { name: 'Bobby',  animal: 'Badger', colour: 'Black and White',
      interests: 'Badgering, Foraging, Ride-on Lawnmowers, Being a bit naughty',
      number: 420,
    },
    { name: 'Carmen', animal: 'Camel', colour: 'Brown',
      interests: 'Cameling, Canoeing, Climbing',
      number: 999,
    },
    { name: 'Derek',  animal: 'Dog', colour: 'White, black, brown, grey, or a mix',
      interests: 'Dogging, Chasing rabbits, Eating, Sleeping',
      number: 42,
    },
    { name: 'Edward', animal: 'Elephant', colour: 'Grey',
      interests: 'Elephanting, Eating buns',
      number: 123456789,

    },
  ];
  const columns = {
    name: {
      label: 'Name',
    },
    animal: {
      label: 'Animal',
    },
    colour: {
      label: 'Colour',
    },
    interests: {
      label: 'Interest',
    },
    number: {
      label: 'Favourite Number',
    },
  };
  return <>
    <p className="mar-t-none">
      This example shows a wide table with the <code className="code">scrollX</code> attribute.
    </p>
    <Checkbox
      value={scrollX} text="scrollX"
      onChange={setScrollX}
    />
    <DataTable
      rows={rows}
      columns={columns}
      scrollX={scrollX}
    />
  </>
}

export const PersistantOptions = () => {
  const rows = [
    { name: 'Bobby', animal: 'Badger', id: 21, role: 'admin' },
    { name: 'Simon', animal: 'Stoat',  id: 22, role: 'user'  },
    { name: 'Frank', animal: 'Ferret', id: 23, role: 'user'  },
  ];
  const columns = {
    id: {
      label: 'ID',
      hidden: true,
    },
    name: {
      label: 'Name',
    },
    animal: {
      label: 'Animal',
    },
    role: {
      label: 'Role',
      hidden: true,
    },
  };
  return <>
    <p className="mar-t-none">
      Define a <code className="code">storageKey</code> identifier if you want to automatically
      persist filtering, sorting and pagination options via local storage.  Try changing some options
      (e.g. selecting/deselecting fields, setting sort order, adding a filter, changing page size, etc)
      and then reload the page.  The data table should retain those options.
    </p>
    <DataTable
      rows={rows}
      columns={columns}
      storageKey="datatable-test-01"
    />
  </>
}

/*
export const ColumnTypes = () => {
  const rows = [
    { number: 10, price: 10, name: 'Ten' },
    { id: 102, amount: 102, price: 1002, name: 'One Hundred and Two' },
    { id: 103, amount: 103, price: 101, name: 'One Hundred and Three', wibbly: true },
    { id: 1001, amount: 1001, price: 1001, name: 'One Thousand and One', wibbly: true },
    { id: 11,  amount: 11,    price: 11,     name: 'One Louder', wibbly: true },
  ];
  return <DataTable
    rows={rows}
    columns={columns}
    // function to determine row class
    rowClass={row => row.id === 11 ? 'positive' : ''}
    // row click handler
    rowClick={row => window.alert("You clicked on #" + row.id)}
    initialPageSize={2}
  />
}
*/
