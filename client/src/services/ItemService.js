import API from './'

export const GetItemsByList = async (listID) => {
  try {
    const res = await API.get(`/lists/${listID}`)      // whatever emily sets it as
    return res.data.items                              // ??? 
  } catch (error) {
    throw error
  }
}

export const PostNewItem = async (newItem) => {
  try {
    const res = await API.post('/items',              // whatever emily sets it as
      {
        title: newItem.title,
        details: newItem.details,
        dueDate: newItem.dueDate
      })
    return res.data                                   // ???
  } catch (error) {
    throw error
  }
}

export const SetCompleted = async (itemID,status) => {
  try {
    const res = await API.put(`/items/${itemID}`,
    {
      completed: `${!status}`
    })
    return res.data                                   // ???
  } catch (error) {
    throw error
  }
}

export const SetPriority = async (itemID, priority) => {
  try {
    const res = await API.put(`items/${itemID}`,      // whatever emily sets it as
    {
      priority: `i have no idea`                      // whatever emily sets it as
    })
    return res.data                                   // ???
  } catch (error) {
    throw error
  }
}

export const DeleteItem = async (itemID) => {
  try {
    const res = await API.delete(`/todos/${itemID}`)  // whatever emily sets it as
    return res
  } catch (error) {
    throw error
  }
}