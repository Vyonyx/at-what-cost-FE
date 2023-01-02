import Nav from "../components/Nav"

type Props = {
  children: JSX.Element
}

function Layout({children}: Props) {
  return (
    <main>
      <Nav />
      {children}
    </main>
  )
}
export default Layout