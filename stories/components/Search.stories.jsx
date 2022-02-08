import React from 'react';
import { Search } from '../../src/components/Search';

export default {
  title: 'Components/Search',
  component: Search,
}

export const Overview = () => <>
  <h1 className="mar-t-none mar-l-none">Search</h1>
  <p className="intro">
    The <code className="code">Search</code> component implements an autocomplete search
    which will make suggestions as you type.
  </p>
</>

export const AnimalSearch = () => {
  const animals = [
    'Alligator', 'Albatross', 'Badger', 'Baboon', 'Camel', 'Chipmunk', 'Dog', 'Dolphin',
    'Elephant', 'Emu', 'Fish', 'Fox', 'Giraffe', 'Gorilla', 'Hamster', 'Honey Badger',
    'Ibis', 'Iguana', 'Jackal', 'Jellyfish', 'Kangaroo', 'King Cobra', 'Lion', 'Llama',
    'Monkey', 'Magpie', 'Narwhal', 'Newt', 'Octopus', 'Otter', 'Parrot', 'Penguin',
    'Quail', 'Rabbit', 'Rattlesnake', 'Shark', 'Snail', 'Tiger', 'Turkey', 'Uakari',
    'Umbrella Bird', 'Vulture', 'Vampire Bat', 'Walrus', 'Wolf', 'X-Ray of a Badger',
    'X-rated Badger Movie', 'Yak', 'Yorkshire Terrier', 'Zebra'
  ];
  const [selected, select] = React.useState(false);

  return <>
    <p>
      This example shows a simple search through a list of animal names.
      Hint: try typing <code className="code">ba</code>
    </p>
    <Search
      placeholder="Animal search"
      className="rounded"
      onSearch={
        (that, value) => that.searchResults(
          animals.filter( a => a.toLowerCase().match(value) )
        )
      }
      // how to render each result in the selection list
      renderResult={result => <div className="result">{result}</div>}
      // how to render a selected result in the search bar
      displayValue={result => result}
      // what to do when the result is selected
      onSelect={result => select(result)}
    />
    <div className="pad-t-2" style={{marginBottom: '10em'}}>
    { selected && `You selected ${selected}`}
    </div>
  </>
}

export const StructuredRecords = () => {
  const animals = [
    { name: 'Albatross',            comment: 'Hear the rime of the ancient mariner' },
    { name: 'Badger',               comment: 'Mushroom!  Mushroom!' },
    { name: 'Baboon',               comment: 'Ooh, ooh, ooh!' },
    { name: 'Honey Badger',         comment: 'Nasty cousin of the European badger' },
    { name: 'Vampire Bat',          comment: 'Bitey' },
    { name: 'X-Ray of a Badger',    comment: 'Inside the Badger' },
    { name: 'X-rated Badger Movie', comment: 'Badger sexy time' }
  ];
  const [selected, select] = React.useState(false);

  return <>
    <p>
      This example uses structured data records.  Hint: typing <code className="code">ba</code> would
      also be a good choice here.
    </p>
    <Search
      placeholder="Animal search"
      className="rounded"
      onSearch={
        (that, value) => that.searchResults(
          animals.filter( a => a.name.toLowerCase().match(value) )
        )
      }
      renderResult={
        result =>
          <div className="result">
            <div className="largish">{result.name}</div>
            <div className="smallish">{result.comment}</div>
          </div>
      }
      displayValue={result => result.name}
      onSelect={result => select(result)}
    />
    <div className="pad-t-2" style={{marginBottom: '10em'}}>
    { selected && `You selected ${selected.name} - ${selected.comment}`}
    </div>
  </>
}
