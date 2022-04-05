import React from "react";
import { Search } from "../../src/components/Search";
import { Theme } from '../../src/utils'

export default {
  title: 'Theming/Search'
};

export const ThemedSearch = () => {
  const MyTheme = {
    Search: {
      searchIcon:  'badger',
      clearIcon:   'trash',
      loadingIcon: 'radiation spin'
    },
  };
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
    <h1 className="mar-t-none mar-l-none">Themed Search</h1>
    <div className="row text-center">
      <div className="split-2 gut-r">
        <h2>Unthemed</h2>
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
      </div>
      <div className="split-2 gut-l">
        <h2>Themed</h2>
        <Theme.Provider {...MyTheme}>
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
      </Theme.Provider>
      </div>
    </div>
  </>
}
