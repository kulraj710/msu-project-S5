import React from 'react'
import { useRouter } from 'next/router';
import { format } from 'date-fns'

const SidebarConversationBox = ({ style, id, index }) => {

  const router = useRouter()

  const redirectToChat = () => {
    router.push(`/?id=${id.id}`)
  }
  return (
    <div className={style} onClick={redirectToChat}>
      <div>
        <h5>Conversation : {index}</h5>
        <span>{format(id.date.toDate(), "dd/MM/yy hh:mm a")}</span>
      </div>
    </div>
  )
}

export default SidebarConversationBox