import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <section class="hero pt-32 pb-48">
        <div class="max-w-[700px] mx-auto text-center">
          <h1 class="text-6xl font-semibold text-gray-900 mb-12 leading-tight">A socket.io real time chat application</h1>
          <Link class="btn secondary !px-10 " to={'chat'}>Get Talking</Link>
        </div>
      </section>
    </>
  );
}
