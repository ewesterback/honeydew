import API from './'

export const GetListsByUser = async (userID) => {
  try {
    const res = await API.get(
      // get by userID from backend
    )
    return res.data.results  // ??? or just res.data ??
  } catch (error) {
    throw error
  }
}

