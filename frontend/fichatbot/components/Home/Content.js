import React, {useEffect}  from 'react'
import ChatContainer from './ChatContainer';

const Content = () => {

    const [hydrated, setHydrated] = React.useState(false);
    useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        return null;
    }

  return (
      <div>
        <ChatContainer/>
      </div>
  )
}

export default Content
