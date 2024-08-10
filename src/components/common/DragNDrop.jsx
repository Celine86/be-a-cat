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

  const handleTouchStart = (e, item, sourceList) => {
    //e.preventDefault();
    e = e.touches[0];  
    e.target.setAttribute("data-item", JSON.stringify(item));
    e.target.setAttribute("data-sourceList", sourceList);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
    if (targetElement) {
      targetElement.dispatchEvent(new Event("dragover", { bubbles: true }));
    }
  };

  const handleTouchEnd = (e, targetList, targetItemId = null) => {
    const touch = e.changedTouches[0];
    const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
    if (targetElement) {
      const dropEvent = new Event("drop", { bubbles: true });
      dropEvent.dataTransfer = {
        getData: (type) => {
          const target = document.querySelector(`[data-item][data-sourceList]`);
          if (type === "item") return target.getAttribute("data-item");
          if (type === "sourceList") return target.getAttribute("data-sourceList");
          return null;
        },
      };
      targetElement.dispatchEvent(dropEvent);
    }
  };

  return (
    <div className="container">
        <div 
          className={className} 
          onDrop={e => handleDrop(e, 'listA')} 
          onDragOver={handleDragOver}

          onTouchMove={handleTouchMove}
          onTouchEnd={(e) => handleTouchEnd(e, 'listA')}
        >
            {listA.map(item => (
            <div
                key={item.id}
                className="item"
                draggable
                onDragStart={(e) => handleDragStart(e, item, 'listA')}
                onTouchStart={(e) => handleTouchStart(e, item, 'listA')}
            >
                {item.text}
            </div>
            ))}
        </div>
        <div 
          className="list" 
          onDrop={e => handleDrop(e, 'listB')} 
          onDragOver={handleDragOver}
          onTouchMove={handleTouchMove}
          onTouchEnd={(e) => handleTouchEnd(e, 'listB')}
        >
            {listB.map((item, index) => (
            <div
                key={item.id}
                className="item"
                draggable
                onDragStart={(e) => handleDragStart(e, item, 'listB')}
                onDrop={(e) => handleDrop(e, 'listB', item.id)}
                onTouchStart={(e) => handleTouchStart(e, item, 'listB')}
            >
                {item.text}
            </div>
            ))}
        </div>
    </div>
  );
}