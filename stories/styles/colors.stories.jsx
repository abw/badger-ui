import React from 'react';
import { colors } from '../../src/config/colors'

export default {
  title: 'Styles/Colors'
};

export const Overview = () => <>
  <h1 className="mar-t-none mar-l-none">Colour Styles</h1>
  <p className="intro">
    The stylesheet includes a number of pre-defined colours and corresponding
    classes that can be applied to change the foreground, background or border
    colours.
  </p>
  <p>
    For the sake of avoiding potential confusion we spell &quot;colour&quot; as &quot;color&quot;
    through gritted teeth.
  </p>
</>

export const ShadesOfGrey = () => <div className="bg-pale-green pad flex">
  <div className="bg-black white pad">bg-black</div>
  <div className="bg-slate white pad">bg-slate</div>
  <div className="bg-grey white pad">bg-grey</div>
  <div className="bg-smoke pad">bg-smoke</div>
  <div className="bg-white pad">bg-white</div>
</div>;

export const GreyScale = () =>
  <>
    <div className="bg-pale-blue pad">
      <div className="row">
        <div className="black   split-11 small pad">black</div>
        <div className="grey-10 split-11 small pad">grey-10</div>
        <div className="grey-20 split-11 small pad">grey-20</div>
        <div className="grey-30 split-11 small pad">grey-30</div>
        <div className="grey-40 split-11 small pad">grey-40</div>
        <div className="grey-50 split-11 small pad">grey-50</div>
        <div className="grey-60 split-11 small pad">grey-60</div>
        <div className="grey-70 split-11 small pad">grey-70</div>
        <div className="grey-80 split-11 small pad">grey-80</div>
        <div className="grey-90 split-11 small pad">grey-90</div>
        <div className="white   split-11 small pad">white</div>
      </div>
      <div className="row">
        <div className="bg-black   white split-11 small pad">bg-black</div>
        <div className="bg-grey-10 white split-11 small pad">bg-grey-10</div>
        <div className="bg-grey-20 white split-11 small pad">bg-grey-20</div>
        <div className="bg-grey-30 white split-11 small pad">bg-grey-30</div>
        <div className="bg-grey-40 white split-11 small pad">bg-grey-40</div>
        <div className="bg-grey-50 white split-11 small pad">bg-grey-50</div>
        <div className="bg-grey-60 white split-11 small pad">bg-grey-60</div>
        <div className="bg-grey-70       split-11 small pad">bg-grey-70</div>
        <div className="bg-grey-80       split-11 small pad">bg-grey-80</div>
        <div className="bg-grey-90       split-11 small pad">bg-grey-90</div>
        <div className="bg-white         split-11 small pad">bg-white</div>
      </div>
    </div>
  </>

export const TextColors = () => <>
  {colors.map(
    col => <span key={col} className={`bold ${col} mar-r`}>{col} </span>
  )}
</>;

export const PaleTextColors = () =>
  <div className="bg-slate pad">
    {colors.map(
      col => <span key={col} className={`bold pale-${col} mar-r`}>pale-{col} </span>
    )}
  </div>;

export const DarkTextColors = () => <>
  {colors.map(
    col => <span key={col} className={`bold dark-${col} mar-r`}>dark-{col} </span>
  )}
</>;

export const BackgroundColors = () => <>
  {colors.map(
    col => <span key={col} className={`inline-block bg-${col} pad mar white`}>bg-{col} </span>
  )}
</>;

export const PaleBackgroundColors = () => <>
  {colors.map(
    col => <span key={col} className={`inline-block ${col} bg-pale-${col} pad mar`}>bg-pale-{col} </span>
  )}
</>;

export const BackgroundShades = () => <>
  {colors.map(
    col => <div key={col} className="grid-9">
      <div className={`white smaller pad bg-darkest-${col} text-center`}>bg-darkest-{col}</div>
      <div className={`white smaller pad bg-darker-${col} text-center`}>bg-darker-{col}</div>
      <div className={`white smaller pad bg-dark-${col} text-center`}>bg-dark-{col}</div>
      <div className={`white smaller pad bg-darkish-${col} text-center`}>bg-darkish-{col}</div>
      <div className={`white smaller pad bg-${col} text-center`}>bg-{col}</div>
      <div className={`white smaller pad bg-lightish-${col} text-center`}>bg-lightish-{col}</div>
      <div className={`white smaller pad bg-light-${col} text-center`}>bg-light-{col}</div>
      <div className={`white smaller pad bg-lighter-${col} text-center`}>bg-lighter-{col}</div>
      <div className={`white smaller pad bg-lightest-${col} text-center`}>bg-lightest-{col}</div>
      {/* <div className={`split-8 ${col} smaller pad bg-pale-${col} text-center`}>bg-pale-{col}</div> */}
    </div>
  )}
</>;

export const BorderColors = () => <>
  {colors.map(
    col => <span key={col} className={`inline-block bd-${col} pad mar`}>bd-{col} </span>
  )}
</>;

export const DarkBorderColors = () => <>
  {colors.map(
    col => <span key={col} className={`inline-block bd-dark-${col} pad mar`}>bd-dark-{col} </span>
  )}
</>;

export const ComboColors1 = () => <>
  {colors.map(
    col => <span key={col} className={`inline-block bg-${col} bd-dark-${col} pad mar white`}>bg-{col} bd-dark-{col} </span>
  )}
</>;

export const ComboColors2 = () => <>
  {colors.map(
    col => <span key={col} className={`inline-block ${col} bg-pale-${col} bd-${col} pad mar`}>{col} bg-pale-{col} bd-{col} </span>
  )}
</>;

export const ComboColors3 = () => <>
  {colors.map(
    col => <span key={col} className={`inline-block dark-${col} bg-pale-${col} bd-dark-${col} pad mar`}>dark-{col} bg-pale-{col} bd-dark-{col} </span>
  )}
</>;
