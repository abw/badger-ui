import React, { useState } from 'react'
import * as yup  from 'yup'
import Button from '../../src/components/Button';
import {
  Form, Field, Fields, TwoFields, ThreeFields, FourFields,
  FieldHelp, FieldLabel
} from '../../src/components/Form'

export default {
  title: 'Components/Form/Fields',
  component: Form,
};

export const Overview = () => <>
  <h1 className="mar-t-none mar-l-none">Form Fields</h1>
  <p className="intro">
    A form should contain one or more <code className="code">Field</code> components.
    The specification for each field can be provided as properties on
    the <code className="code">Field</code>.
  </p>
  <p>
    Alternately, if you prefer to define your form schema separately, then you can
    pass the <code className="code">fields</code> property
    to the <code className="code">Form</code> component.
    The <code className="code">name</code> associated
    with a field will be used to lookup additional properties from this object.
  </p>
</>

export const SimpleTextInput = () =>
  <>
    <p className="mar-t-none">
      A form field must have a <code className="code">name</code> property.
      All other properties are optional. The default input type is a text field.
    </p>
    <Form>
      <Field name="sometext"/>
    </Form>
  </>

export const InputWithALabel = () =>
  <>
    <p className="mar-t-none">
      Define the <code className="code">label</code> property to
      add a label to the field.
    </p>
    <Form>
      <Field name="sometext" label="This is a label"/>
    </Form>
  </>

export const InputWithPlaceholder = () =>
  <>
    <p className="mar-t-none">
      Define the <code className="code">placeholder</code> property to
      add placeholder text to the input field.
    </p>
    <Form>
      <Field name="sometext" label="This is a label" placeholder="This is a placeholder"/>
    </Form>
  </>

export const TextInputWithType = () =>
  <>
    <p className="mar-t-none">
      Add the <code className="code">type</code> attribute to change the data type
      for a text input field, e.g. to <code className="code">number</code>,{' '}
      <code className="code">date</code>, <code className="code">password</code>, etc.
    </p>
    <Form>
      <Field name="number" type="number" label="Enter a number"/>
      <Field name="number" type="date" label="Enter a date"/>
      <Field name="number" type="password" label="Enter a password"/>
    </Form>
  </>

export const RequiredInput = () =>
  <>
    <p className="mar-t-none">
      Use the <code className="code">required</code> property to indicate
      that the field is required.  Try clicking on the input field below
      and then click away without entering anything.
    </p>
    <Form>
      <Field name="sometext" label="Some Mandatory Text" required/>
    </Form>
  </>

export const RequiredMessage = () =>
  <>
    <p className="mar-t-none">
      Use the <code className="code">requiredMessage</code> property to provide
      a custom validation message for required fields that are left blank.
    </p>
    <Form>
      <Field name="sometext" label="Some Mandatory Text"
        required requiredMessage="You are a numpty!"/>
    </Form>
  </>

export const RequiredFieldIndication = () =>
  <>
    <p className="mar-t-none">
      Add the <code className="code">showRequired</code> property to have
      the field marked as being required.
      This property will be ignored if the field is not required.
    </p>
    <Form>
      <Field name="sometext" label="Some Mandatory Text" required showRequired/>
      <Field name="moretext" label="Some Optional Text"  showRequired/>
    </Form>
  </>

export const OptionalFieldIndication = () =>
  <>
    <p className="mar-t-none">
      If you prefer to show the user which fields are optional then add
      the <code className="code">showOptional</code> property to a field
      that isn&apos;t required to have it marked as being optional.
      This property will be ignored if the field is required.
    </p>
    <Form>
      <Field name="sometext" label="Some Mandatory Text" required showOptional/>
      <Field name="moretext" label="Some Optional Text" showOptional/>
    </Form>
  </>

export const RequiredFormIndication = () =>
  <>
    <p className="mar-t-none">
      You can add the <code className="code">showRequired</code> property to the
      form to have it apply to all the required fields in the form.
    </p>
    <Form showRequired>
      <Field name="sometext" label="Some Mandatory Text" required/>
      <Field name="moretext" label="More Mandatory Text" required/>
      <Field name="extra"    label="Optional Text"/>
    </Form>
  </>

export const OptionalFormIndication = () =>
  <>
    <p className="mar-t-none">
      You can add the <code className="code">showOptional</code> property to the
      form to have it apply to all the optional fields in the form.
    </p>
    <Form showOptional>
      <Field name="sometext" label="Some Mandatory Text" required/>
      <Field name="moretext" label="More Mandatory Text" required/>
      <Field name="extra"    label="Optional Text"/>
    </Form>
  </>

export const RequiredAndOptionalForm = () =>
  <>
    <p className="mar-t-none">
      You can add both the <code className="code">showRequired</code> and{' '}
      <code className="code">showOptional</code> property to the
      form if you like.
    </p>
    <Form showRequired showOptional>
      <Field name="sometext" label="Some Mandatory Text" required/>
      <Field name="moretext" label="More Mandatory Text" required/>
      <Field name="extra"    label="Optional Text"/>
    </Form>
  </>

export const FieldWithHelp = () =>
  <>
    <p className="mar-t-none">
      Define the <code className="code">help</code> property to
      add some additional help which will be displayed below the input.
    </p>
    <Form>
      <Field name="sometext" label="Some Text" help="Enter some text above"/>
    </Form>
  </>

export const FieldWithLeftIcon = () =>
  <>
    <p className="mar-t-none">
      Define the <code className="code">leftIcon</code> property to
      add an icon to the left of the input.
    </p>
    <Form>
      <Field name="sometext" label="Some Text" iconLeft="user"/>
    </Form>
  </>

export const FieldWithRightIcon = () =>
  <>
    <p className="mar-t-none">
      Define the <code className="code">rightIcon</code> property to
      add an icon to the right of the input.
    </p>
    <Form>
      <Field name="sometext" label="Some Text" iconRight="user"/>
    </Form>
  </>

export const FieldWithPrefix = () =>
  <>
    <p className="mar-t-none">
      Use the <code className="code">prefix</code> property to
      add any custom text to appear to the left of the input.
      This will not have any effect if <code className="code">leftIcon</code> is
      defined.
    </p>
    <Form>
      <Field name="sometext" label="Prefix Example" prefix="£"/>
    </Form>
  </>

export const FieldWithSuffix = () =>
  <>
    <p className="mar-t-none">
      Use the <code className="code">suffix</code> property to
      add any custom text to appear to the right of the input.  This
      will not have any effect if <code className="code">rightIcon</code> is
      defined.
    </p>
    <Form>
      <Field name="sometext" label="Suffix Example" suffix=".00"/>
    </Form>
  </>

export const DisabledField = () =>
  <>
    <p className="mar-t-none">
      Use the <code className="code">disabled</code> property to
      indicate that the field is disabled.  It will be greyed out
      and input will not be accepted.
    </p>
    <Form>
      <Field name="sometext" label="Disabled Field" disabled/>
    </Form>
  </>

export const PrepareField = () =>
  <>
    <p className="mar-t-none">
      Define a <code className="code">prepareValue()</code> handler
      to provide any custom code to prepare the input text.
      In this example we convert the input to upper case.
    </p>
    <Form>
      <Field
        name="upper"
        label="Upper Case Field"
        prepareValue={value => value.toUpperCase()}
      />
    </Form>
  </>

export const ValidateField = () =>
  <>
    <p className="mar-t-none">
      Define a <code className="code">validate()</code> handler
      to provide custom code to validate the input.  The easiest
      way to generate a validator is using
      the <a href="https://github.com/jquense/yup">yup</a> library.
    </p>
    <Form>
      <Field
        name="vowels"
        label="Enter Vowels"
        help="Type between 3 and 5 vowels"
        validate={
          value => yup
            .string()
            .trim()
            .matches(/^[aeiou]*$/i, 'You should only type vowels')
            .min(3, 'You must enter at least three vowels')
            .max(5, 'You should not enter more than 5')
            .validate(value)
        }
      />
    </Form>
  </>

export const CustomValidation = () => {
  const validate = value => {
    return new Promise(
      (resolve, reject) => {
        if (value.match(/badger/)) {
          resolve(value);
        }
        else {
          reject("Wrong, it's a badger!");  // eslint-disable-line quotes
        }
      }
    )
  }
  return <>
    <p className="mar-t-none">
        You can write your own validation code, or use a different validation
        library if you prefer but it should confirm to the same protocol as
      <code className="code">yup.validate(value)</code>.  It should be a function
        that takes a values as an argument and returns a Promise that either resolves
        the value or rejects it.  This is powerful, if a bit long-winded.
        See the code for this example.
    </p>
    <Form>
      <Field
        name="badger"
        label="What's your favourite animal?"
        help="Enter the name of your favourite animal."
        validate={validate}
      />
    </Form>
  </>
}

export const CustomValidator = () => {
  const validator = (value, field, pass, fail) =>
    value.match(/badger/)
      ? pass(value)
      : fail("Wrong, it's a badger!") // eslint-disable-line quotes

  return <>
    <p className="mar-t-none">
        If you want something a bit simpler, you can specify
        a <code className="code">validator</code> function (note the
        subtle difference between &quot;validat<b>or</b>&quot; and &quot;validat<b>e</b>&quot; -
        they&apos;re similar but work in slightly different ways).  If you
        specify a <code className="code">validator</code> then we take care
        of wrapping it up in a Promise for you so that it works like a
      <code className="code">validate</code> function.
    </p>
    <p>
        The <code className="code">validator</code> function should
        take four parameters: the <code className="code">value</code>,
        the <code className="code">field</code> state, a <code className="code">pass()</code> function,
        and a <code className="code">fail()</code> function.  It should
        call either of the <code className="code">pass()</code> or
      <code className="code">fail()</code> functions.
    </p>
    <Form>
      <Field
        name="badger"
        label="What's your favourite animal?"
        help="Enter the name of your favourite animal."
        validator={validator}
      />
    </Form>
  </>
}

export const FocusAndBlur = () => {
  const [state, setState] = React.useState('');
  return <>
    <p className="mar-t-none">
      Define <code className="code">onFocus()</code> and/or{' '}
      <code className="code">onBlur()</code> handlers to
      detect when the input is focussed or blurred.
    </p>
    <Form>
      <Field
        name="upper"
        label="Hocus Pocus Detect the Focus"
        onFocus={() => setState('Focussed')}
        onBlur={() => setState('Blurred')}
      />
    </Form>
    <div className="blue">{state}</div>
  </>
}

export const FieldsDefinedOnForm = () => {
  const fields = {
    email: {
      label: 'Your Email Address',
      iconLeft: 'at'
    },
    password: {
      label: 'Your Password',
      iconLeft: 'key'
    },
  }
  return <>
    <p>
      In this example the <code className="code">fields</code> property
      on the <code className="code">Form</code> component is used to define
      the properties for the fields.  The <code className="code">name</code> property
      on the <code className="code">Field</code> component is used to lookup
      additional properties from there.
    </p>
    <p>
      This is particularly useful when you want
      to concentrate on how the form is laid out and just want to indicate
      where a particular field goes, without having to specify all the field
      details.  Separation of concerns FTW!
    </p>
    <Form fields={fields}>
      <div className="row">
        <div className="split-2 gut-r">
          <Field name="email"/>
        </div>
        <div className="split-2 gut-l">
          <Field name="password"/>
        </div>
      </div>
    </Form>
  </>
}

export const InsertingMultipleFields = () => {
  const fields = {
    email: {
      label: 'Your Email Address',
      iconLeft: 'at'
    },
    password: {
      label: 'Your Password',
      iconLeft: 'key'
    },
  }
  return <>
    <p>
      When defining the <code className="code">fields</code> data as a <code className="code">Form</code> property
      as shown in the previous example, you can use the <code className="code">Fields</code> component
      to insert multiple fields in one go.  The <code className="code">names</code> property should
      be either an array of field names or a string containing a whitespace delimited list of field names.
    </p>
    <Form fields={fields}>
      <Fields names="email password"/>
    </Form>
  </>
}

export const InsertTwoFields = () => {
  const fields = {
    email: {
      label: 'Your Email Address',
      iconLeft: 'at'
    },
    password: {
      label: 'Your Password',
      iconLeft: 'key'
    },
  }
  return <>
    <p>
      You can use the <code className="code">TwoFields</code> component for the common case
      where you want two fields to appear side-by-side.  As with the <code className="code">Fields</code> component
      you should use the <code className="code">names</code> property to provide the field names.
    </p>
    <p>
      You might like to add a &quot;stacking&quot; class to the fields container using the{' '}
      <code className="code">className</code> attribute.  For example, <code className="code">stack-tablet</code>{' '}
      which will cause the fields to stack vertically for screen widths below the tablet breakpoint
      (1024px).  Try adjusting your browser width to see this in action.
    </p>
    <Form fields={fields}>
      <TwoFields names="email password" className="stack-tablet"/>
    </Form>
  </>
}

export const InsertThreeFields = () => {
  const fields = {
    email: {
      label: 'Your Email Address',
      iconLeft: 'at'
    },
    password: {
      label: 'Your Password',
      iconLeft: 'key'
    },
    confirm: {
      label: 'Confirm Password',
      iconLeft: 'key'
    },
  }
  return <>
    <p>
      Want three fields side-by-side?  No problem - use the <code className="code">ThreeFields</code>{' '}
      component.
    </p>
    <Form fields={fields}>
      <ThreeFields names="email password confirm" className="stack-tablet"/>
    </Form>
  </>
}

export const InsertFourFields = () => {
  const fields = {
    north: {
      label: 'North',
      iconLeft: 'arrow-up'
    },
    east: {
      label: 'East',
      iconLeft: 'arrow-right'
    },
    south: {
      label: 'South',
      iconLeft: 'arrow-down'
    },
    west: {
      label: 'West',
      iconLeft: 'arrow-left'
    },
  }
  return <>
    <p>
      If you want to go one louder, you can use the <code className="code">FourFields</code>{' '}
      component.  Any more than that and you&apos;re on your own.
    </p>
    <Form fields={fields}>
      <FourFields names="north east south west" className="stack-tablet"/>
    </Form>
  </>
}

export const CustomLayout = () => {
  const MyLayout = ({field}) => {
    const Input = field.Input;
    console.log('Label: ', Field.Label);

    return <div className="field">
      <FieldLabel field={field}/>
      <div className="row">
        <div className="split-2 gut-r">
          <Input form={field.form} field={{ ...field }}/>
        </div>
        <div className="split-2 gut-l">
          <FieldHelp field={field}/>
        </div>
      </div>
    </div>
  }
  const fields = {
    custom: {
      label: 'Custom Layout Field',
      help: 'This field has a custom layout',
      Layout: MyLayout
    },
  };
  return <>
    <p>
      You can define a custom layout for a field by setting
      the <code className="code">Layout</code> property.
    </p>
    <Form fields={fields}>
      <Field name="custom"/>
    </Form>
  </>
}

export const FieldReference = () => {
  const [animalField, setAnimalField] = useState();
  const [colorField, setColorField] = useState();
  return <>
    <p className="mar-t-none">
      If you need to access the a field object reference then use
      the <code className="code">onLoad</code> property in conjunction
      with React&apos;s <code className="code">useState</code> to store the
      field reference.
    </p>
    <p>
      In this example we save references to the color and animal fields and
      then call the <code className="code">setValue()</code> method when one of
      the buttons is clicked.
    </p>
    <Form>
      <Field name="color" label="Color"   onLoad={setColorField}/>
      <Field name="animal" label="Animal" onLoad={setAnimalField}/>
    </Form>
    <Button
      text="Black and White"
      color="black" solid
      onClick={() => colorField.setValue('Black and White')}
    />
    <Button
      text="Brown"
      color="brown" solid
      onClick={() => colorField.setValue('Brown')}
    />
    <Button
      text="Badger"
      iconLeft="badger"
      onClick={() => animalField.setValue('Badger')}
    />
    <Button
      text="Cat"
      iconLeft="cat"
      onClick={() => animalField.setValue('Cat')}
    />
  </>
}

/*
export const ValidField = () => <>
  <Form>
    <Field name="sometext" label="Valid Field" valid/>
  </Form>
</>

export const InvalidField = () => <>
  <Form>
    <Field name="sometext" label="Valid Field" valid/>
  </Form>
</>
*/
