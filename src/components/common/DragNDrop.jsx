import { useState } from 'react';
import './DragNDrop.css';

export function DragNDrop({className}) {
  const [listA, setListA] = useState([
    { id: 1, text: " " },
    { id: 2, text: " " },
    { id: 3, text: " " },
    { id: 4, text: " " },
    { id: 5, text: " " },
    { id: 6, text: " " },
    { id: 7, text: " " },
    { id: 8, text: " " }
  ]);
  const [listB, setListB] = useState([]);

  const handleDragStart = (e, item, sourceList) => {
    e.dataTransfer.setData("item", JSON.stringify(item));
    e.dataTransfer.setData("sourceList", sourceList);
  };
  
  const handleDrop = (e, targetList, targetItemId = null) => {
    e.preventDefault();
    const item = JSON.parse(e.dataTransfer.getData("item")); 
    const sourceList = e.dataTransfer.getData("sourceList"); 
    const addToList = targetList === "listA" ? setListA : setListB;
    const removeFromList = targetList === "listA" ? setListB : setListA;
    
    if (sourceList === targetList) {
      if (targetList === "listB") {
        setListB(prev => {
          let newList = [...prev];
          const [reorderedItem] = newList.splice(newList.findIndex(i => i.id === item.id), 1);
          const index = targetItemId ? newList.findIndex(i => i.id === targetItemId) : newList.length;
          newList.splice(index, 0, reorderedItem);
          return newList;
        });
      }
    } else {
      addToList(prev => {
        if (prev.some(i => i.id === item.id)) {
          return prev;
        }
        return [...prev, item];
      });
      removeFromList(prev => prev.filter(i => i.id !== item.id));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleClickToRemove = (id) => {
    setListB(prev => prev.filter(item => item.id !== id));
  };
  
  return (
    <div className="container">
        <div className={className} onDrop={e => handleDrop(e, 'listA')} onDragOver={handleDragOver}>
            {listA.map(item => (
            <div
                key={item.id}
                className="item"
                draggable
                onDragStart={(e) => handleDragStart(e, item, 'listA')}
            >
                {item.text}
            </div>
            ))}
        </div>
        <div className="list" onDrop={e => handleDrop(e, 'listB')} onDragOver={handleDragOver}>
            {listB.map((item, index) => (
            <div
                key={item.id}
                className="item"
                draggable
                onClick={() => handleClickToRemove(item.id)}
                onDragStart={(e) => handleDragStart(e, item, 'listB')}
                onDrop={(e) => handleDrop(e, 'listB', item.id)}
            >
                {item.text}
            </div>
            ))}
        </div>
    </div>
  );


}