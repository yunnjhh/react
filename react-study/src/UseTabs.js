import { useState } from 'react'; 

const UseTabs = (initialTab, allTabs) => {
    // if (!allTabs || !Array.isArray(allTabs)) {
    //   return;
    // }
  
    const [idx, setIdx] = useState(initialTab); 
    return {
      currentItem: allTabs[idx],
      changeItem: setIdx
    }
  }

export default UseTabs;
