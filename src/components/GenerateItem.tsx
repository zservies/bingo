import React, { useState } from 'react';
import { IListItem } from '../interfaces/component.interfaces';

export default function GenerateItem(props: any) {
  const [listItem, setListItem] = useState<IListItem | null>();


  // b0-4, i5-9, n10-14, g15-20, o21-25.
  const createItem = () => {
    const min = Math.ceil(0);
    const max = Math.ceil(24);
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    let letter = '';
    switch (true) {
      case number <= 4:
        letter = 'B'
        break;
      case number <=9:
        letter = 'I';
        break;
      case number <=14:
        letter = 'N';
        break;
      case number <= 19:
        letter = 'G';
        break;
      case number <=24:
        letter = 'O'
        break;
    }
    setListItem({letter, number});
    console.log('clicked!', listItem);
    return props.listItem(listItem);
  }

  return <div>
    <h3>{listItem?.letter} {listItem?.number}</h3>
    <button onClick={createItem}>Generate Item</button>
  </div>;
}
