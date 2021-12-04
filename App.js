
import './App.css';
import UserList from './UserList';


function App() {
  // const [list, setList] = useState([])
 // const [loading, setLoading] = useState(true)
 // useEffect(() => {
//    const getApiData=async()=> {
//      try{ const resp=await axios.get("https://api.mapbox.com/fonts/v1/{username}/Arial%20Unicode%20MS%20Regular/0-255.pbf?access_token=YOUR_MAPBOX_ACCESS_TOKEN")
//     setList(resp.data)
//     console.log(resp)
//     }catch(err){console.log(err)}
// }
    
//     getApiData()
//     setLoading(false)

 // }, [])
  return (
//     <div>
//     {loading? <h6>Loading...</h6>: 
// list.map(el=>
//   <div>
// <h5>{el.API}</h5>
// <h6>{el.Description}</h6>
// </div>
// ) }
// </div>
    <UserList />
  )
}


export default App;
