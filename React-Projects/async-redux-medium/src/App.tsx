import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from './lib/hooks/hooks'
import { getUsersDataApi } from './lib/features/users/usersApi'

function App() {
  const dispatch = useAppDispatch()
  const { error, loading, user } = useAppSelector((state) => state.users)

  const fetchUserList = async () => {
    const resultAction = await dispatch(getUsersDataApi())
    if (getUsersDataApi.fulfilled.match(resultAction)) {
      // Show Console Or Toast For Success Here
      console.log('data fetched successfully')
    }
  }
  
  useEffect(() => {
    fetchUserList()
  }, [dispatch])

  // Below Statements can be done conditionally using "&& or ternary operatiors"
  if (loading) return <h1>Loading...</h1> // Render Your Loading Component When Loading Is True 
  if (error) return <h1>{error}</h1> // Render The Error That You Recieve From Backend Using This

  // Rendering Table With Fetched Data
  return (
    <div className="mt-9 text-center">
      <h1 className="text-center text-xl mb-5">USERS LIST</h1>
      <div className="flex w-3/4 m-auto flex-col border-2 p-4 hover:bg-slate-100 hover:transition">
        <table className='table table-auto'>
          <thead className="border-2 border-cyan-600">
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Maths</td>
              <td>English</td>
            </tr>
          </thead>
          <tbody>
            {user.map((singleUser) => (
              <tr key={singleUser.id} className="border-black hover:bg-slate-300 hover:transition">
                <td>{singleUser.id}</td>
                <td>{singleUser.name}</td>
                <td>{singleUser.maths}</td>
                <td>{singleUser.english}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
