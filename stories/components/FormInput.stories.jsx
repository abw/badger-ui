import React from 'react'
import { Form, Field } from '../../src/components/Form'
import { Button } from '../../src/components/Button'

export default {
  title: 'Components/Form/Inputs',
};

export const Overview = () => <>
  <h1 className="mar-t-none mar-l-none">Form Inputs</h1>
  <p className="intro">
    Use the <code className="code">input</code> property on a field to
    specify what kind of input it uses.
  </p>
</>

export const DefaultTextInput = () =>
  <>
    <p className="mar-t-none">
      The default input type is <code className="code">text</code>.
    </p>
    <Form>
      <Field name="sometext" label="Default text input"/>
    </Form>
  </>

export const TextAreaInput = () =>
  <>
    <p className="mar-t-none">
      Set the <code className="code">input</code> to <code className="code">textarea</code> for
      a multi-line text input.
    </p>
    <Form>
      <Field name="sometext" input="textarea" label="Textarea input"/>
    </Form>
  </>

export const TextAreaRows = () =>
  <>
    <p className="mar-t-none">
      You can specify the <code className="code">rows</code> for a <code className="code">textarea</code> input.
    </p>
    <Form>
      <Field name="sometext" input="textarea" rows={20}/>
    </Form>
  </>

export const CheckboxInput = () =>
  <>
    <p className="mar-t-none">
      Here&apos;s the <code className="code">checkbox</code> input type.
    </p>
    <Form>
      <Field name="sometext" input="checkbox" text="Do you like Badgers?"/>
    </Form>
  </>

export const CheckboxInputWithOptions = () =>
  <>
    <p className="mar-t-none">
      The <code className="code">checkbox</code> input type accepts the same
      options as the <code className="code">Checkbox</code> component
    </p>
    <Form>
      <Field
        name="sometext"
        input="checkbox"
        text="Do you like Badgers?"
        checkedIcon="check"
        uncheckedIcon="badger"
      />
    </Form>
  </>

export const SelectInput = () =>
  <div className="pad-b-10">
    <p className="mar-t-none">
      The <code className="code">select</code> input type displays a pull-down
      menu using the <code className="code">Select</code> component.
    </p>
    <Form>
      <Field
        name="animal" input="select"
        text="Do you like Badgers?"
        options={[
          { value: "f", text: "Ferrets" },
          { value: "b", text: "Badgers" },
          { value: "s", text: "Stoats" },
        ]}
      />
    </Form>
  </div>

export const SearchInput = () => {
  const [searchField, setSearchField] = React.useState();
  const rows = [
    { id: 100, forename: 'Alan',    surname: 'Aardvark' },
    { id: 101, forename: 'Brian',   surname: 'Badger' },
    { id: 102, forename: 'Colin',   surname: 'Camel' },
    { id: 103, forename: 'David',   surname: 'Dog' },
    { id: 104, forename: 'Edward',  surname: 'Elephant' },
    { id: 105, forename: 'Frank',   surname: 'Ferret' },
    { id: 106, forename: 'Gerald',  surname: 'Giraffe' },
    { id: 107, forename: 'Hector',  surname: 'Hedgehog' },
    { id: 108, forename: 'Ivan',    surname: 'Iguana' },
    { id: 109, forename: 'Jack',    surname: 'Jaguar' },
    { id: 110, forename: 'Kevin',   surname: 'Kangaroo' },
  ];
  const field = {
    displayValue: value => `${value.forename} ${value.surname}`,
    value: rows[0],
    onSearch: (that, value) => that.searchResults(
      rows.filter(
        r => (r.forename.toLowerCase() + ' ' + r.surname.toLowerCase()).match(value.toLowerCase())
      )
    ),
    renderResult: result => <div className="result bar">
      <div>{result.forename} {result.surname}</div>
      <div className="small black">#{result.id}</div>
    </div>
  }
  return <div className="pad-b-10">
    <p className="mar-t-none">
      The <code className="code">search</code> input type displays an autocomplete search
      using the <code className="code">Search</code> component.
    </p>
    <p>
      If you need to programmatically set the search value then use
      the <code className="code">onLoad</code> prop to store a reference
      to the input field.  That will contain an <code className="code">inputRef</code> which
      is a reference to the <code className="code">Search</code> component.  Call
      the <code className="code">select()</code> method on that.
    </p>
    <Form>
      <Field
        name="animal" input="search" minLength={1} {...field}
        onLoad={setSearchField}
      />
      <Button
        color="blue" text="Set to Alan Aardvark"
        onClick={() => searchField.inputRef.select(rows[0])}
      />
      <Button
        color="blue" text="Set to Brian Badger"
        onClick={() => searchField.inputRef.select(rows[1])}
      />
      <Button
        color="blue" text="Set to Colin Camel"
        onClick={() => searchField.inputRef.select(rows[2])}
      />
    </Form>
  </div>
}

export const RadioInput = () =>
  <div className="pad-b-10">
    <p className="mar-t-none">
      The <code className="code">radio</code> input type displays a number of
      options of which only one can be selected.  It uses the <code className="code">Radio</code> component.
    </p>
    <Form>
      <Field
        name="animal" input="radio"
        label="Do you like Badgers?"
        help="HINT: You really should like badgers"
        options={[
          { value: 'y', text: 'Yes, of course!' },
          { value: 'n', text: 'No, I am silly' },
        ]}
      />
    </Form>
  </div>

export const RadioInputWithOptions = () =>
  <div className="pad-b-10">
    <p className="mar-t-none">
      The <code className="code">radio</code> input accepts the same properties as
      the <code className="code">Radio</code> component.
    </p>
    <Form>
      <Field
        name="animal"
        input="radio"
        label="What's your favourite animal?"
        help="HINT: You really should like badgers"
        className="grid-3 gap-1"
        optionClass="mar-r-none"
        checkedIcon="check"
        options={[
          { value: 1, text: "Badger", uncheckedIcon: 'badger' },
          { value: 2, text: "Cat",    uncheckedIcon: 'cat'    },
          { value: 3, text: "Human",  uncheckedIcon: 'user'   }
        ]}
      />
    </Form>
  </div>

export const RadioInputValue = () =>
  <div className="pad-b-10">
    <p className="mar-t-none">
      This is a test to check that radio buttons correctly display the
      option when the value is 0.
    </p>
    <Form values={{badgers: 0}}>
      <Field
        name="badgers" input="radio"
        label="How Many Badgers?"
        options={[
          { value: 0, text: 'None, none more badgers' },
          { value: 1, text: 'One badger' },
          { value: 2, text: 'Many badgers' },
        ]}
      />
    </Form>
  </div>

export const StaticText = () =>
  <>
    <p className="mar-t-none">
      The <code className="code">static</code> input type can be used if
      you&apos;ve got some text which can&apos;t be changed but you want
      to be styled in the same way to look like a form field.
    </p>
    <Form>
      <Field name="staticText" input="static" value="Badgers are the best"/>
    </Form>
  </>

export const CustomInputComponents = () =>
  <>
    <p className="mar-t-none">
      Use the <code className="code">Input</code> (note the upper case <code className="code">I</code>)
      to provide a custom component for rendering the field input.
    </p>
    <Form>
      <Field
        name="sometext" label="Some Text"
        Input={({field}) => `[${field.name} custom input]`}
      />
    </Form>
  </>

