import {Routes, Route} from "react-router-dom"
import { Layout } from "../layout/Index"
import { Dashboard } from "../pages/dashboard/Index"

export const AppRoutes = () => {
   return(
      <Routes>
         <Route path = "/" element = { <Layout /> } >
         <Route index element = {<Dashboard />} />
         </Route>
      </Routes>
   )
}