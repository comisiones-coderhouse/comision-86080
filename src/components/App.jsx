import { themeConfig } from "../constants"
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"
import { ConfigProvider } from "antd"
import ProductoProvider from "../ProductContext"

function App() {
  return (
    <ProductoProvider>
      <ConfigProvider theme={themeConfig}>
        <Header />
        <Main />
        <Footer />
      </ConfigProvider>
    </ProductoProvider>
  )
}

export default App