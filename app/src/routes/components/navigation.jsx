import logo from '../../img/logo.png'

export default function Navigation() {
  return (
    <>
      <header class="py-3 border-b border-zinc-300">
        <div class="container mx-auto flex justify-between items-center">
          <div class="logo">
            <img src={logo} alt="Azure Lobster" />
          </div>
          <a class="btn primary">Start A Chat</a>
        </div>
      </header>
    </>
  );
}
