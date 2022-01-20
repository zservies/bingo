import React, { useState } from 'react';
import List from './List';
import GenerateItem from './GenerateItem';
import { IList, IListItem } from '../interfaces/component.interfaces';

export default function Form() {
  // const test = [{letter: 'A', number: 2}, {letter: 'B', number: 5}, {letter: 'N', number: 2}];
  const [bingoList, setBingoList] = useState<Array<IListItem>>([]);

  // b0-4, i5-9, n10-14, g15-20, o21-25.
  function compileList(listItem: IListItem) {
    console.log(listItem, 'heyo!')
    if (listItem) {
      setBingoList([...bingoList, listItem]);
    }
  }
  return <div>
    <GenerateItem listItem={compileList}/>
    <List bingoList={bingoList}/>
  </div>;
}
