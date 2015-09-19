import React from 'react';
import Router from 'react-router';
import App from './App';
import Index from './Index';
import NoteIndex from './notes/NoteIndex';

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={Index} />
    <Route path="notes" handler={NoteIndex} />
  </Route>
);

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.body);
});

// import { Router, Route, Link } from 'react-router';
// React.render((
//   <Router>
//     <Route path="/" component={App}>
//       <Route path="notes" component={NoteIndex}/>
//       <Route path="*" component={Index}/>
//     </Route>
//   </Router>
// ), document.body);