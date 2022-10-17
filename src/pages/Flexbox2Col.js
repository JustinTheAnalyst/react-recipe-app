import React from "react";
import "../css/general.scss";
import "../css/flex2colStyles.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const Flexbox2Col = () => {
  return (
    <>
      <div className="flex-layout">
        <Header />
        <main>
          <div className="flow">
            <h1>Flexible layout</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
              laborum asperiores temporibus tempora doloribus natus soluta id
              perspiciatis voluptas nesciunt quod ab voluptate esse assumenda
              enim, ex, mollitia maiores similique autem consequuntur saepe sunt
              consectetur!
            </p>
            <p>
              Eum blanditiis, nulla magnam praesentium temporibus id esse
              officia eos libero explicabo quaerat quia maiores reiciendis
              veniam aspernatur tempore officiis iure. Pariatur deserunt,
              nostrum neque nulla harum expedita non labore consectetur culpa
              laudantium, vel excepturi!
            </p>
            <p>
              Eligendi, impedit ipsam? Maxime a in doloremque quis atque natus
              rem mollitia, fugit voluptates est illum ab alias magnam quaerat,
              vel inventore, sequi aspernatur ipsam autem? Nesciunt a laudantium
              molestias ipsum sunt ipsa vel fuga!
            </p>
            <p>
              Sed sapiente minima aliquid perspiciatis modi fuga, praesentium
              iure quam quisquam nihil quasi aliquam? Provident nam repellat
              amet minima explicabo culpa necessitatibus, libero quae velit ab
              ex voluptas in unde et eos iste corrupti accusamus.
            </p>
            <p>
              Unde rerum incidunt voluptas temporibus iste corrupti, soluta
              minus officiis! Reprehenderit aspernatur ea odio eum minus, eaque
              amet! Inventore accusamus aperiam pariatur vitae iste, magnam fuga
              quibusdam repellendus distinctio doloribus veniam odio consequatur
              ducimus. Suscipit.
            </p>
          </div>
        </main>
        <Sidebar />
        <Footer />
      </div>
    </>
  );
};

export default Flexbox2Col;
