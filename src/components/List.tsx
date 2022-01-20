import React from 'react';
import { IList } from '../interfaces/component.interfaces';

export default function List(props: IList) {
  console.log('ppp', props);
  const displayedList = props.bingoList && props.bingoList.map((ele, i ) => {
    return <li key={i}>{ele.letter} {ele.number}</li>
  });

  console.log(props);
  return <div>
    <ol>
      {displayedList}
    </ol>
  </div>;
}
