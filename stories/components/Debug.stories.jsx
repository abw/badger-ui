import React from "react";
import Debug from "../../src/components/Debug";

export default {
  title: "Components/Debug",
  component: Debug,
}

export const Example = (props) =>
  <>
    <h1 className="mar-t-none mar-l-none">Debugging Messages</h1>
    <p className="intro">
      The <code className="code">Debug</code> component renders a simple
      message box for debugging.
    </p>
    <Debug text="This is some debug text" />
  </>

export const CustomTitle = (props) =>
  <>
    <Debug
      text="This is some debug text"
      title="Debugging Info"
      icon="info-circle" />
  </>

export const CustomContent = (props) =>
  <>
    <Debug>
      <h3>Debug Section One</h3>
      <p>This is some debugging text.</p>
      <h3>Debug Section Two</h3>
      <p>This is some more debugging text.</p>
    </Debug>
  </>

