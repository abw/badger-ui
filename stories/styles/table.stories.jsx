import React from 'react';

export default {
  title: 'Styles/Table'
};

export const Overview = () => <>
  <h1 className="mar-t-none mar-l-none">Table Styles</h1>
  <p className="intro">
    Styling for tables.
  </p>
</>


export const DefaultStyle = () =>
  <>
    <p className="mar-t-none">
      Add the <code className="code">table</code> CSS class to apply some basic styling for tables.
    </p>
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nigel Tufnel</td>
          <td>nigel@spinal-tap.com</td>
        </tr>
        <tr>
          <td>David St.Hubbins</td>
          <td>david@spinal-tap.com</td>
        </tr>
        <tr>
          <td>Derek Smalls</td>
          <td>derek@spinal-tap.com</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colSpan="2" className="text-center">Tap Into America!</th>
        </tr>
      </tfoot>
    </table>
  </>

export const CelledTable = () =>
  <>
    <p className="mar-t-none">
      Add the <code className="code">celled</code> CSS class to separate cells.
    </p>
    <table className="celled table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>nigel@spinal-tap.com</td>
          <td>Nigel Tufnel</td>
        </tr>
        <tr>
          <td>david@spinal-tap.com</td>
          <td>David St.Hubbins</td>
        </tr>
        <tr>
          <td>Derek Smalls</td>
          <td>derek@spinal-tap.com</td>
        </tr>
      </tbody>
    </table>
  </>

export const CompactTable = () =>
  <>
    <p className="mar-t-none">
      Add the <code className="code">compact</code> CSS class to reduce the passing and font size.
    </p>
    <table className="compact celled table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nigel Tufnel</td>
          <td>nigel@spinal-tap.com</td>
        </tr>
        <tr>
          <td>David St.Hubbins</td>
          <td>david@spinal-tap.com</td>
        </tr>
        <tr>
          <td>Derek Smalls</td>
          <td>derek@spinal-tap.com</td>
        </tr>
      </tbody>
    </table>
  </>

export const StripedTable = () =>
  <>
    <table className="compact celled striped table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nigel Tufnel</td>
          <td>nigel@spinal-tap.com</td>
        </tr>
        <tr>
          <td>David St.Hubbins</td>
          <td>david@spinal-tap.com</td>
        </tr>
        <tr>
          <td>Derek Smalls</td>
          <td>derek@spinal-tap.com</td>
        </tr>
        <tr>
          <td>Viv Savage</td>
          <td>viv@spinal-tap.com</td>
        </tr>
        <tr>
          <td>John &quot;Stumpy&quot; Pepys</td>
          <td>john@spinal-tap.com</td>
        </tr>
      </tbody>
    </table>
  </>

export const MiscellaneousStyles = () =>
  <>
    <p className="mar-t-none">
      Add the <code className="code">positive</code> or <code className="code">negative</code> classes to a <code className="code">tr</code>
      element to show the row in a positive (green) or negative (red) light.
      The <code className="code">saving</code> class is another special case for table rows to
      indicate that a record is being saved (e.g. on deleting an item).
    </p>

    <table className="compact celled striped table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr className="positive">
          <td>Nigel Tufnel</td>
          <td>nigel@spinal-tap.com</td>
        </tr>
        <tr className="positive">
          <td>David St.Hubbins</td>
          <td>david@spinal-tap.com</td>
        </tr>
        <tr className="positive">
          <td>Derek Smalls</td>
          <td>derek@spinal-tap.com</td>
        </tr>
        <tr className="negative">
          <td>Viv Savage</td>
          <td>viv@spinal-tap.com</td>
        </tr>
        <tr className="saving">
          <td>John &quot;Stumpy&quot; Pepys</td>
          <td>john@spinal-tap.com</td>
        </tr>
      </tbody>
    </table>
  </>

export const SelectableTable = () =>
  <>
    <p className="mar-t-none">
      Add the <code className="code">selectable</code> class to add an on-hover effect to table rows
      that contain selectable items.  The <code className="code">selected</code> class can be added
      to the selected row.
    </p>

    <table className="compact celled selectable table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nigel Tufnel <span className="label teal">Guitar</span></td>
          <td>nigel@spinal-tap.com</td>
        </tr>
        <tr>
          <td>David St.Hubbins <span className="label green">Guitar</span></td>
          <td>david@spinal-tap.com</td>
        </tr>
        <tr>
          <td>Derek Smalls <span className="label blue">Bass</span></td>
          <td>derek@spinal-tap.com</td>
        </tr>
        <tr className="selected">
          <td>Viv Savage <span className="label orange">Keys</span></td>
          <td>viv@spinal-tap.com</td>
        </tr>
        <tr>
          <td>John &quot;Stumpy&quot; Pepys <span className="label red">Drums</span></td>
          <td>john@spinal-tap.com</td>
        </tr>
      </tbody>
    </table>
  </>

export const DetailTable = () =>
  <>
    <p className="mar-t-none">
      Add the <code className="code">detail</code> class for some additional styling for tables
      showing details of a particular record.  The <code className="code">key</code> class can be
      added to cells to identify the keys.
    </p>
    <table className="compact celled detail table">
      <tbody>
        <tr>
          <td className="key">Name</td>
          <td>Nigel Tufnel</td>
        </tr>
        <tr>
          <td className="key">Email</td>
          <td>nigel@spinal-tap.com</td>
        </tr>
        <tr>
          <td className="key">Instrument</td>
          <td>Guitar</td>
        </tr>
        <tr>
          <td className="key">Volume Level</td>
          <td>11, it&apos;s one louder</td>
        </tr>
      </tbody>
    </table>
  </>
