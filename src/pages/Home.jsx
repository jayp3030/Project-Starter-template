/* eslint-disable react-refresh/only-export-components */
import navWithAuthentication from '../HOCs/navWithAuthentication'
import ThemeToggler from '../components/ThemeToggler'

const Home = () => {
  return (
    <div className='text-5xl font-bold dark:text-white dark:bg-black'>
      home hello 
      <ThemeToggler/>
    </div>
  )
}

export default navWithAuthentication(Home)
