import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import PageNotFound from "./components/PageNotFound.tsx";
import MapPage from "./components/map/MapPage.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import rootStore from "../redux/rootStore.tsx";
import { IAppState } from '../models/IAppState';
import { initialState } from "../redux/initialState.tsx"
import { Store } from "redux";
import { Provider } from "react-redux";

function App() {

  const init: Partial<IAppState> = initialState;
  const store: Store<IAppState> = rootStore(init);

  return (
    <Provider store={store}>
      <BrowserRouter>
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
      </BrowserRouter>
    </Provider>
  )
}
export default App;
