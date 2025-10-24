import  React, { createElement }  from  "react" ;
import ReactDOM, { createRoot } from "react-dom/client";
import Home from "./components.js/home";
import { BrowserRouter} from "react-router";
import { Provider } from 'react-redux'
import { store } from "./store/store";




function App (){


return (
    
<> 
<Provider store = {store}>
<BrowserRouter><Home></Home></BrowserRouter>
</Provider> 
</>
)



}




export  default App ;
