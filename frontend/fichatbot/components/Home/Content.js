import React, { useEffect } from 'react'
import ChatContainer from './ChatContainer';
import { useRouter } from 'next/router';
import DefaultPage from './DefaultPage';

const Content = ({isAnswerLoading, setIsAnswerLoading}) => {

  const router = useRouter()
  const [hydrated, setHydrated] = React.useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }


  // Extract the 'id' parameter from the URL
  const { id } = router.query

  if (id) {
    // Render the component if 'id' is present in the URL
    return (
      <>
        <div>
          <ChatContainer isAnswerLoading={isAnswerLoading} setIsAnswerLoading={setIsAnswerLoading}/>
        </div>
      </>
    );
  } else {
    // Render something else or nothing if 'id' is not present
    return <div><DefaultPage /></div>;
  }
}


export default Content
