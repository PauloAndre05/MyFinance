import {Routes, Route} from "react-router-dom"
import { Layout } from "../layout/Index"
import { Dashboard } from "../pages/dashboard/Index"
import { Transacoes } from "../pages/transaction/Index"
import { Category } from "../pages/category/Index"
import { Relatorios } from "../pages/relatorios/Index"
import { Configuracoes } from "../pages/configuracoes/Index"

export const AppRoutes = () => {
   return(
      <Routes>
         <Route path = "/" element = { <Layout /> } >
         <Route index element = {<Dashboard />} />
         <Route path="/transactions" element = { <Transacoes />} />
         <Route path="/Categories" element = { <Category />} />
         <Route path="/reports" element = { <Relatorios />} />
         <Route path="/settings" element = { <Configuracoes />} />
         </Route>
      </Routes>
   )
}