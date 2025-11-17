import { themeConfig } from "../constants"
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"
import { ConfigProvider } from "antd"
import ProductoProvider from "../ProductContext"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <ProductoProvider>
      <ConfigProvider theme={themeConfig}>
        <Header />
        <Main />
        <Footer />
        <Toaster position="top-right" toastOptions={{ duration: 1500 }} />
      </ConfigProvider>
    </ProductoProvider>
  )
}

export default App