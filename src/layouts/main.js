import './../assets/css/style.css' 
import Header from './widgets/header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from '../routes/index'
function Main() {
  return (
    <div>
        <Header />
        <Switch>
         {
            routes.map((element,index)=>{
                return <Route key={index} path={element?.path} exact component={element.component} />
            })
         }
        </Switch>
    </div>
  );
}

export default Main;
