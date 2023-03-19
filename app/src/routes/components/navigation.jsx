import { Link } from "react-router-dom";
import logo from '../../img/logo.png'

export default function Navigation() {
  return (
    <>
      <header>
        <div class="container mx-auto flex justify-between items-center">
          <div class="logo">
            <img src={logo} alt="Azure Lobster" />
          </div>
          <Link class="btn primary" to={'chat'}>Start A Chat</Link>
        </div>
      </header>
    </>
  );
}
