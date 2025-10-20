import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"
import { ConfigProvider } from "antd"

function App() {

  return (
    <ConfigProvider theme={{
      token : {
        "colorPrimary" : "#469381"
      }
    }}>
      <Header />
      <Main />
      <Footer />
    </ConfigProvider>
  )
}

export default App