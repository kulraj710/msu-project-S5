import React from 'react'
import ChatContainer from './ChatContainer';

const Content = ({chatArray}) => {
  
  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => {
      setHydrated(true);
  }, []);
  if (!hydrated) {
      return null;
  }


  return (
      <div>
        <ChatContainer chatArray={chatArray}/>
      </div>
  )
}

export default Content
