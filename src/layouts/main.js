import Header from './widgets/header';
import { BrowserRouter, Switch, Route,useLocation } from 'react-router-dom';
import routes from '../routes/index'
function Main() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
        <Header />
        <div className="container-fluid m-0 p-0">
            <div className="row m-0 p-0">
              <div className="col-md-12 p-0 m-0">
                <Switch>
                  {
                      routes.map((element,index)=>{
                          return <Route key={index} path={element?.path} exact component={element.component} />
                      })
                  }
                </Switch>
              </div>
            </div>
        </div>

    </div>
  );
}

export default Main;
