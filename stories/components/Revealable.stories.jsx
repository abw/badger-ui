import React from "react";
import { Revealable } from "../../src/components/Revealable";

export default {
  title: "Components/Revealable",
  component: Revealable,
}

export const Overview = () => <>
  <h1 className="mar-t-none mar-l-none">Revealable Content</h1>
  <p className="intro">
    The <code className="code">Revealable</code> component allows you
    to define content that will be revealed when the title bar is clicked.
  </p>
</>

export const RevealableContent = () =>
  <Revealable title="Click to Reveal">
    Hello world!
  </Revealable>

export const LinedStyle = () =>
  <Revealable title="Click to Reveal" className="lined">
    Hello world!
  </Revealable>

export const OutlinedStyle = () =>
  <Revealable title="Click to Reveal" className="outlined">
    Hello world!
  </Revealable>

export const CustomIcons = () =>
  <Revealable
    title="Click to Reveal" className="outlined"
    unrevealedIcon="angle-right" revealedIcon="angle-down"
  >
    Hello world!
  </Revealable>

export const InitiallyRevealed = () =>
  <Revealable
    title="Initially Revealed - Click to Hide" className="outlined"
    initiallyRevealed="true"
  >
    Hello world!
  </Revealable>

export const HeadAndBodyClasses = () =>
  <Revealable
    title="Click to Reveal" className="outlined"
    headClass="largest" bodyClass="large"
  >
    Hello world!
  </Revealable>
