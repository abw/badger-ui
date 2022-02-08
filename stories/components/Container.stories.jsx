import React from 'react';
import { Container } from '../../src/components/Container';

export default {
  title: 'Components/Container',
  component: Container,
};

export const Overview = () => <>
  <h1 className="mar-t-none mar-l-none">Container</h1>
  <p className="intro">
    This component wraps the content in a <code className="code">container</code>
    class.  You can&apos;t tell what it does from these examples because Storybook
    embeds the examples in a container of its own.  In the default case it adds
    some horizontal margins to pull the content in from the edges.  Add one of
    the breakpoint classes (<code className="code">widescreen</code>,{' '}
    <code className="code">desktop</code>, <code className="code">tablet</code>{' '}
    or <code className="code">mobile</code>) to have it limit the maximum width
    to the breakpoint size and centre the content.
  </p>
</>

export const DefaultContainer = () =>
  <Container>
    Badgers are short-legged omnivores mostly in the family Mustelidae
    (which also includes the otters, wolverines, martens, minks, polecats, weasels, and ferrets),
    but also with two species called &quot;badgers&quot; in the related family Mephitidae
    (which also includes the skunks). Badgers are a polyphyletic grouping, and are not a
    natural taxonomic grouping: badgers are united by their squat bodies, adapted for
    fossorial activity. All belong to the caniform suborder of carnivoran mammals.
  </Container>

export const WidescreenContainer = () =>
  <Container className="widescreen">
    Badgers are short-legged omnivores mostly in the family Mustelidae
    (which also includes the otters, wolverines, martens, minks, polecats, weasels, and ferrets),
    but also with two species called &quot;badgers&quot; in the related family Mephitidae
    (which also includes the skunks). Badgers are a polyphyletic grouping, and are not a
    natural taxonomic grouping: badgers are united by their squat bodies, adapted for
    fossorial activity. All belong to the caniform suborder of carnivoran mammals.
  </Container>

export const DesktopContainer = () =>
  <Container className="desktop">
    Badgers are short-legged omnivores mostly in the family Mustelidae
    (which also includes the otters, wolverines, martens, minks, polecats, weasels, and ferrets),
    but also with two species called &quot;badgers&quot; in the related family Mephitidae
    (which also includes the skunks). Badgers are a polyphyletic grouping, and are not a
    natural taxonomic grouping: badgers are united by their squat bodies, adapted for
    fossorial activity. All belong to the caniform suborder of carnivoran mammals.
  </Container>

export const TabletContainer = () =>
  <Container className="tablet">
    Badgers are short-legged omnivores mostly in the family Mustelidae
    (which also includes the otters, wolverines, martens, minks, polecats, weasels, and ferrets),
    but also with two species called &quot;badgers&quot; in the related family Mephitidae
    (which also includes the skunks). Badgers are a polyphyletic grouping, and are not a
    natural taxonomic grouping: badgers are united by their squat bodies, adapted for
    fossorial activity. All belong to the caniform suborder of carnivoran mammals.
  </Container>

export const MobileContainer = () =>
  <Container className="mobile">
    Badgers are short-legged omnivores mostly in the family Mustelidae
    (which also includes the otters, wolverines, martens, minks, polecats, weasels, and ferrets),
    but also with two species called &quot;badgers&quot; in the related family Mephitidae
    (which also includes the skunks). Badgers are a polyphyletic grouping, and are not a
    natural taxonomic grouping: badgers are united by their squat bodies, adapted for
    fossorial activity. All belong to the caniform suborder of carnivoran mammals.
  </Container>

