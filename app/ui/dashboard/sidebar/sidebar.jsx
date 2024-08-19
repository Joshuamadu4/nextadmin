import styles from "./sidebar.module.css"
import { MdDashboard } from 'react-icons/md';



const menuItems = [
  {
    title:"Pages",
    list:[
      {
      title: "Dashboard", 
      path: "/dashbaord", 
      icon: <MdDashboard/>,
    }, 
    {
      title: "", 
      path: "/dashbaord", 
      icon: <MdDashboard/>,
    }, 

]
  }
]
const Sidebar = () => {
  return (
    <div className={styles.container}>Sidebar</div>
  )
}

export default Sidebar