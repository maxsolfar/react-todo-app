import React from "react";

function useLocalStorage(itemName, initialValue){


  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);


  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      }
      catch(error) {
        setError(error);
      }
    }, 2200);
  });
  

  
  
    /*
     * almacena los Todos en el localStorage y cambia el state
     */
  
    const savedItem = (newItem) => {

      try {
        const stringifiedItem = JSON.stringify(newItem);
    
        localStorage.setItem(itemName, stringifiedItem);
    
        setItem(newItem);
      }
      catch(error){
          setError(error);
      }
    }
  
  
    return {
      item,
      savedItem,
      error,
      loading,
    };
    
  }

  export { useLocalStorage };