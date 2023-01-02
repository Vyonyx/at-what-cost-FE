import Footer from "../components/Footer"
import Nav from "../components/Nav"

type Props = {
  children: JSX.Element
}

function Layout({children}: Props) {
  return (
    <main>
      <Nav />
      {children}
      <Footer />
    </main>
  )
}
export default Layout