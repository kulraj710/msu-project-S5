import {format} from "date-fns"

export const formatDate = (date) => {
    return format(date , "hh:mm aa")
}