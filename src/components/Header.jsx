import logo from '/logo-name.svg'

const now = new Date();

export default function Header() {
    return (
      <header>
            <img src={logo} alt="" />
            {/* <h3>RES University</h3> */}
            <span>Time: {now.toLocaleTimeString()}</span>
        </header>
    )
  }
  