import Userprofile from './Components/UserProfile/index'
import './App.css'

const UserDetailsList = [
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Chris Hemsworth',
    role: 'Sofware Developer',
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Emma Johnson',
    role: 'Frontend Developer',
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jane foster',
    role: 'Backend Developer',
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Scalett',
    role: 'UI Developer',
  },
  {
    imageUrl:
      'https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg',
    name: 'Jackson',
    role: 'AI Developer',
  },
  {
    imageUrl:
      'https://img.freepik.com/free-vector/hand-drawn-ethnic-beauty-illustration-with-woman_52683-109415.jpg',
    name: 'Marina',
    role: 'SQL Developer',
  },
]
const UserDetailsData = {
  imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  name: 'Chris Hemsworth',
  role: 'Sofware Developer',
}

const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {UserDetailsList.map(eachitem => (
        <Userprofile UserDetailsData={eachitem} />
      ))}
    </ul>
  </div>
)

export default App
