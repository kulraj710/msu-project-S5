import React from 'react'
import { useRouter } from 'next/router';

const SidebarConversationBox = ({style, id}) => {

  const router = useRouter()

  const redirectToChat = () => {
    router.push(`/?id=${id}`)
  } 
  return (
    <div className={style} onClick={redirectToChat}>
              <div>
                <h5>Conversation</h5>
                <span>Id : {id}</span>
              </div>
    </div>
  )
}

export default SidebarConversationBox