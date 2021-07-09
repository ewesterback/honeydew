import API from './'

export const GetItemsByList = async (listID) => {
  console.log(listID)
  try {
    const res = await API.get(`/lists/${listID}`) // whatever emily sets it as
    console.log(res.data)
    return res.data.todos // ???
  } catch (error) {
    throw error
  }
}

export const PostNewItem = async (newItem) => {
  console.log(newItem)
  try {
    const res = await API.post(
      '/todos', // whatever emily sets it as
      {
        title: newItem.title,
        content: newItem.content,
        priority: newItem.priority,
        dueDate: newItem.dueDate,
        list_id: newItem.list_id
      }
    )
    return res.data // ???
  } catch (error) {
    throw error
  }
}

export const SetCompleted = async (itemID, status) => {
  try {
    const res = await API.put(`/items/${itemID}`, {
      completed: `${!status}`
    })
    return res.data // ???
  } catch (error) {
    throw error
  }
}

export const SetPriority = async (itemID, priority) => {
  try {
    const res = await API.put(
      `items/${itemID}`, // whatever emily sets it as
      {
        priority: `i have no idea` // whatever emily sets it as
      }
    )
    return res.data // ???
  } catch (error) {
    throw error
  }
}

export const UpdateItemInfo = async (itemID) => {
  try {
    const res = await API.put(
      `items/${itemID}`, // whatever emily sets it as
      {
        title: `w/e it needs to be to make it update`,
        content: `w/e it needs to be to make it update`
      }
    )
    return res.data // ???
  } catch (error) {
    throw error
  }
}

export const DeleteItem = async (itemID) => {
  try {
    const res = await API.delete(`/todos/${itemID}`) // whatever emily sets it as
    return res
  } catch (error) {
    throw error
  }
}
