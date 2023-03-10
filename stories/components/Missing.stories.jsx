import React from 'react';
import { Missing } from '../../src/components/Missing';

export default {
  title: 'Components/Missing',
  component: Missing,
};

export const Overview = () => <>
  <h1 className="mar-t-none mar-l-none">Missing</h1>
  <p className="intro">
    A component to create a panel indicating something is missing.
  </p>
</>

export const DefaultExample = () =>
  <Missing />

export const NoFriends = () =>
  <Missing item="Friends" />

export const MissingBadger = () =>
  <Missing item="Badger" icon="badger2" />

export const CustomText = () =>
  <Missing text="You should feel bad" icon="sad"/>

export const CustomContent = () =>
  <Missing icon="alert">
    <h3 className="mar-v-none">Missing Thing</h3>
    <div className="small">
      <div>Where has it gone?</div>
      <div>Has it fallen down the back of the sofa?</div>
    </div>
  </Missing>
