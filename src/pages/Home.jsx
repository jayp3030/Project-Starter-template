/* eslint-disable react-refresh/only-export-components */
import navWithAuthentication from '../HOCs/navWithAuthentication'

const Home = () => {
  return (
    <div className='text-5xl font-bold dark:text-white dark:bg-black'>
      home hello 
    </div>
  )
}

export default navWithAuthentication(Home)
