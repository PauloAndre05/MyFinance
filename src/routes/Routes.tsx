import {Routes, Route} from "react-router-dom"
import { Layout } from "../layout/Index"
import { Dashboard } from "../pages/dashboard/Index"
import { Transacoes } from "../pages/transacoes/Index"
import { Categorias } from "../pages/categorias/Index"
import { Relatorios } from "../pages/relatorios/Index"
import { Configuracoes } from "../pages/configuracoes/Index"

export const AppRoutes = () => {
   return(
      <Routes>
         <Route path = "/" element = { <Layout /> } >
         <Route index element = {<Dashboard />} />
         <Route path="/transacoes" element = { <Transacoes />} />
         <Route path="/categorias" element = { <Categorias />} />
         <Route path="/relatorios" element = { <Relatorios />} />
         <Route path="/configuracoes" element = { <Configuracoes />} />
         </Route>
      </Routes>
   )
}