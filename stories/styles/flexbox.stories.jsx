import React from 'react'
import { Icon } from '../../src/components/Icon'
import { Button } from '../../src/components/Button'

export default {
  title: 'Styles/Flexbox'
};

export const Overview = () => <>
  <h1 className="mar-t-none mar-l-none">Flexbox Classes</h1>
  <p className="intro">
    These utility classes can be used to enable Flexbox and set
    various related options.
  </p>
</>

export const FlexboxDefaults = () =>
  <div className="flex">
    <Icon className="x2" name="warning" />
    <h3 className="mar-v-none mar-h">Danger Danger</h3>
    <Button size="small" color="blue" iconLeft="badger" text="Badger" className="mar-b-none" />
    <p className="mar-none">
      This is some text.<br />
      This is some more text.<br />
      This is the third line of text.
    </p>
  </div>

export const AlignStart = () =>
  <div className="flex start">
    <Icon className="x2" name="warning" />
    <h3 className="mar-v-none mar-h">Danger Danger</h3>
    <Button size="small" color="blue" iconLeft="badger" text="Badger" className="mar-b-none" />
    <p className="mar-none">
      This is some text.<br />
      This is some more text.<br />
      This is the third line of text.
    </p>
  </div>

export const AlignCenter = () =>
  <div className="flex center">
    <Icon className="x2" name="warning" />
    <h3 className="mar-v-none mar-h">Danger Danger</h3>
    <Button size="small" color="blue" iconLeft="badger" text="Badger" className="mar-b-none" />
    <p className="mar-none">
      This is some text.<br />
      This is some more text.<br />
      This is the third line of text.
    </p>
  </div>

export const AlignEnd = () =>
  <div className="flex end">
    <Icon className="x2" name="warning" />
    <h3 className="mar-v-none mar-h">Danger Danger</h3>
    <Button size="small" color="blue" iconLeft="badger" text="Badger" className="mar-b-none" />
    <p className="mar-none">
      This is some text.<br />
      This is some more text.<br />
      This is the third line of text.
    </p>
  </div>

export const SpaceItems = () =>
  <div className="flex space">
    <Button solid color="red" text="One" />
    <Button solid color="green" text="Two" />
    <Button solid color="blue" text="Three" />
  </div>

export const EvenItems = () =>
  <div className="flex evenly">
    <Button solid className="wide" color="red" text="One" />
    <Button solid className="wide" color="green" text="Two" />
    <Button solid className="wide" color="blue" text="Three" />
  </div>

