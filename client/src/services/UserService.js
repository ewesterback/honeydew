import API from './'

export const GetUserById = async (id) => {
  try {
    const res = await API.get(
      // get by id from backend
    )
    return res.data.results  // ??? or just res.data ??
  } catch (error) {
    throw error
  }
}

