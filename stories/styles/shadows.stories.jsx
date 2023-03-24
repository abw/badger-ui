import React from 'react';

export default {
  title: 'Styles/Shadows'
};

export const Overview = () => <>
  <h1 className="mar-t-none mar-l-none">Shadow Styles</h1>
  <p className="intro">
    ...
  </p>
</>

export const ShadowLevels = () =>
  <>
    <div className="shadow-1 pad-2 mar-b-4">shadow-1</div>
    <div className="shadow-2 pad-2 mar-b-4">shadow-2</div>
    <div className="shadow-3 pad-2 mar-b-4">shadow-3</div>
    <div className="shadow-4 pad-2 mar-b-4">shadow-4</div>
  </>

export const StackedShadows = () =>
  <>
    <div className="pad-2 mar-b-4 bg-grey-50">
      bg-grey-50
      <div className="shadow-4 pad-2 mar-2 bg-grey-60">
        shadow-4 bg-grey-60
        <div className="shadow-3 pad-2 mar-2 bg-grey-70">
          shadow-3 bg-grey-70
          <div className="shadow-2 pad-2 mar-2 bg-grey-80">
            shadow-2 bg-grey-80
            <div className="shadow-1 pad-2 mar-2 bg-grey-90">
              shadow-1 bg-grey-90
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
