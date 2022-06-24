import React from 'react'
import { Route, Switch } from 'react-router'
import "./App.css"
import Blog from './Components/Blog'
import Home from './Components/Home'
import Hosting from './Components/Hosting'
import Navbar from './Components/Navbar'
import Theme from './Components/Theme'
const App = () => {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path='/hosting' component={Hosting}/>
      <Route exact path='/blog' component={Blog}/>
      <Route exact path='/theme' component={()=><Theme cat = {"Premium"}/>}/>
      <Route  exact path="/category/Populartheme" component={()=><Theme cat={"Popular"} />}/>
      <Route  exact path="/category/Blog" component={()=><Theme cat={"Blog"} />}/>
      <Route  exact path="/category/Entertainment" component={()=><Theme cat={"Entertainment"} />}/>
      <Route  exact path="/category/Real_Estate" component={()=><Theme cat={"Real_Estate"} />}/>
      <Route  exact path="/category/Nonprofit" component={()=><Theme cat={"Nonprofit"} />}/>
      <Route  exact path="/category/Corporate" component={()=><Theme cat={"Corporate"} />}/>
      <Route  exact path="/category/Creative" component={()=><Theme cat={"Creative"} />}/>
      <Route  exact path="/category/Wedding" component={()=><Theme cat={"Wedding"} />}/>
      <Route  exact path="/category/BuddyPress" component={()=><Theme cat={"BuddyPress"} />}/>
    </Switch>
    </>
  )
}

export default App
