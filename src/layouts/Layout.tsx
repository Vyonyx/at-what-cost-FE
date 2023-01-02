type Props = {
  children: JSX.Element
}

function Layout({children}: Props) {
  return (
    <main>
      <nav>Nav</nav>
      {children}
    </main>
  )
}
export default Layout