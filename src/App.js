import logo from './logo.svg';
// import './App.css';
import Header from './Components/Header';
import Posts from './Components/Posts';
import TagButton from './Components/TagButton';
import TrainUseState from './Components/TrainUseState';
import MyInput from './Components/MyInput';
import MyFormUseState from './Components/MyFormUseState';
import ObjectStateChallenge from './Components/StateObjectChallenge';
import ArrayUseState from './Components/ArrayUseState';



const showProduct = true;

function App() {

const data = [
  {
  id : 1,
  postName : "el sayed el mekkawy auto",
  postBody : "cars for sale 1",
  address : "zahraa madint nasr "
  },
  {
  id : 2,
  postName : "auto samir rayan",
  postBody : "cars for sale 2",
  address : "nasr city "
  },
  {
  id : 3,
  postName : "stop car",
  postBody : "cars for sale 3",
  address : "mostafa el nahas"
  },
  {
  id : 4,
  postName : "el kersh",
  postBody : "cars for sale 4",
  address : "el merghany"
  },

    ]

    const dataShow = data.map((name) => {
      return(<Posts key={name.id} postName={name.postName} postBody={name.postBody} address={name.address} />)
    })



  const playersName=[
    {id: 1 , title : "ronaldo"},
    {id: 2 , title : "messi"},
    {id: 3 , title : "vida"},
    {id: 4 , title : "carlos"},
    {id: 5 , title : "trika"},
    {id: 6 , title : "vini"},
    {id: 7 , title : "rodrygo"},
    {id: 8 , title : "kaka"},
    {id: 9 , title : "sedorf"},
    {id: 10 , title : "bebeto"},
  ];

  const theBestPlayers = playersName.map((name) => {
    return (<div key={name.id}>{name.title}</div>)
  })


  const moviesName=[
    {id: 1 , title : "con air"},
    {id: 2 , title : "cat in the hat"},
    {id: 3 , title : "el gazira"},
    {id: 4 , title : "top gun"},
    {id: 5 , title : "shams el zanaty"},
  ]

  const moviesList=moviesName.map((movieName) => {
    return (<div key={movieName.id}>{movieName.title}</div>)
  })

  return (
    <div className="App">

      <Header />


      <div style={{display : "flex" , justifyContent : "center" , margin : "20px"}}>

          <div>
            {dataShow}
          </div>

          <div>
            <AppSideMenu />
            {/* <TagButton /> */}
          </div>

      </div>

      <hr></hr>

      <div style={{textAlign : "center"}}>

        <div style={{fontSize : "40px"}}>this is loop</div>
        
        <div>
          {theBestPlayers}
        </div>

      </div>

      <hr></hr>

      <div style={{textAlign : "center"}}>

            <div style={{fontSize : "40px"}}>movies name</div>

            <div>{moviesList}</div>

      </div>

      <hr></hr>

      <TrainUseState />

      <hr></hr>

      <MyInput />

      <hr></hr>

      <MyFormUseState />

      <hr></hr>

      <ObjectStateChallenge />

      <hr></hr>

      <ArrayUseState />

    </div>
  );
}


function AppSideMenu(){
  if(showProduct == true){
    return(<TagButton />)
  }else{
    return(null)
  }
}

export default App;
