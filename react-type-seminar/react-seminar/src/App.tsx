import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, RouteComponentProps, Switch, Redirect, NavLink } from 'react-router-dom'

const Post = (props: RouteComponentProps<{postId: string}>) => {
   const nextBtn = (): void => {
      const nextId = parseInt(props.match.params.postId) + 1
      props.history.push(`/posts/${nextId}`)
   }
   console.log(props)
   return (
      <>
      <h2>post: {props.match.params.postId}</h2>
      <p>parms : {new URLSearchParams(props.location.search).get('body')}</p>
      <button onClick={nextBtn}>다음</button>
      </>

   )
}

const PostList = (props: RouteComponentProps<{}>) => {
   return (
      <div>
         <Route exact path={`${props.match.url}`} component={()=> <h2>postList</h2>}/>
         <Route path={`${props.match.url}/:postId`} component={Post}/>
      </div>
   )
}

const NotFound = () => {
   return (
      <div>
         <h2>NOT FOUND!!</h2>
      </div>
   )
}
const AdminPage = () => {
   const isAdmin = true;
   return (
      isAdmin ? <h3>ADMIN</h3> 
      : <Redirect to="/"></Redirect>
   )
}

function App() {
  return (
     <Router>
    <div className="App">
      <header className="App-header" style={{height: '50vh'}}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <nav>
         <ul>
            <li><NavLink exact activeStyle={{fontSize: 20}} to="/">home</NavLink></li>
            <li><NavLink exact activeStyle={{fontSize: 20}} to="/intro">intro</NavLink></li>
            <li><NavLink exact activeStyle={{fontSize: 20}} to="/admin">admin</NavLink></li>
         </ul>
      </nav>
      <Switch>
         <Route exact path="/" render={() => <h2>hello</h2>}/>
         <Route path="/intro" render={() => <h2>intro</h2>}/>
         <Route path="/posts" component={PostList}/>
         <Route path="/admin" component={AdminPage}/>
         <Redirect from="/about" to="/intro"></Redirect>
         <Route component={NotFound}></Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
