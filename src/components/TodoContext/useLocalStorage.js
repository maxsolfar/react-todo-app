import React from "react";

function useLocalStorage(itemName, initialValue){

    const localStorageItem = localStorage.getItem(itemName);
  
    let parsedItem;
  
    if(!localStorageItem){
      localStorage.setItem('itemName', JSON.stringify(initialValue));
    }
    else {
      parsedItem = JSON.parse(localStorageItem);
    }
  
  
  
    //cambiamos el defaulTodos por la del local storage
    const [item, setItem] = React.useState(parsedItem);
  
  
  
    /*
     * almacena los Todos en el localStorage y cambia el state
     */
  
    const savedItem = (newItem) => {
      const stringifiedItem = JSON.stringify(newItem);
  
      localStorage.setItem(itemName, stringifiedItem);
  
      setItem(newItem);
    }
  
  
    return [
      item,
      savedItem,
    ];
    
  }

  export { useLocalStorage };