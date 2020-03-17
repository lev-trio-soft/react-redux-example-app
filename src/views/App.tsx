import React from "react";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./components/PageNotFound.tsx";
import MapPage from "./components/map/MapPage.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import rootStore from "../redux/rootStore.tsx";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { IAppState } from '../models/IAppState';
import { Store } from 'react-redux';
import { initialState } from "../redux/initialState.tsx"

function App() {

  const init: Partial<IAppState> = initialState;
  const store: Store<IAppState> = rootStore(init);

  return (
    <ReduxProvider store={store}>
      <Router>
        <div className="container-fluid">
          {/* <Header /> */}
          <Switch>
            <Route exact path="/" component={MapPage} />
            {/* <Route path="/about" component={AboutPage} />
      <Route path="/courses" component={CoursesPage} />
      <Route path="/course/:slug" component={ManageCoursePage} />
      <Route path="/course" component={ManageCoursePage} /> */}
            {/* <Route path="/map" component={MapPage} /> */}
            <Route component={PageNotFound} />
          </Switch>
          <ToastContainer autoClose={3000} hideProgressBar />
        </div>
      </Router>
    </ReduxProvider>
  )
}
export default App;
