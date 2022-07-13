import { BrowserRouter, Route } from "react-router-dom";
import "./styles/style.scss";


const App =() =>{
    return(
        <>
            <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path={"/contact"} component={Contact}/>
                <Route path={"/about"} component={About}/>
                <Route path={"/"} component={Home}/>
                <Route/>
                </Switch>
            </BrowserRouter>
        </>
    )
}