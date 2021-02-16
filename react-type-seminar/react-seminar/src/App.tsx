import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, RouteComponentProps } from 'react-router-dom'

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
            <li><Link to="/">home</Link></li>
            <li><Link to="/intro">intro</Link></li>
         </ul>
      </nav>
      <Route exact path="/" render={() => <h2>hello</h2>}/>
      <Route path="/intro" render={() => <h2>intro</h2>}/>
      <Route path="/posts" component={PostList}/>
    </div>
    </Router>
  );
}

export default App;
