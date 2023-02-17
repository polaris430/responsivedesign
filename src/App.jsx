import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Portfolio</h1>
      </div>
      <div className="navbar">
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
      <div>
        <div className="main">
          <div className="side">
            <h1>Column1</h1>
            <h2>SubHeading</h2>
            <p>
              some text Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quas, nam! some text Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quas, nam! some text Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quas, nam!
            </p>
            <h2> More headlines </h2>
            <p>
              some more text Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Eos, repudiandae. some more text Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Eos, repudiandae.
            </p>
            <h2>Archives</h2>
            <p>
              some more text Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Corrupti, rerum?
            </p>
            <button className="btn">Register</button>
          </div>
          <div className="middle">
            <h1>Column1</h1>
            <h2>SubHeading</h2>
            <p>
              some text Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quas, nam! some text Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quas, nam! some text Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quas, nam!
            </p>
            <h2> More headlines </h2>
            <p>
              some more text Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Eos, repudiandae. some more text Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Eos, repudiandae.
            </p>
            <h2>Archives</h2>
            <p>
              some more text Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Corrupti, rerum?
            </p>
            <button className="btn">Pricing</button>
          </div>
        </div>
        <div className="secondmain">
          <div className="firstrow">
            <h2>Offices</h2>
            <p>
              this is some text Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Cum, aliquam?
            </p>
          </div>
          <div className="secondrow ">
            <h2>Reach me</h2>
            <p>
              some text Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Voluptas quo, similique quasi id dolorem deleniti suscipit
              odit sunt obcaecati doloribus ad culpa vero tempora voluptate?
            </p>
            <button className="btn">Send email</button>
          </div>
        </div>
        <div className="footer">
          <h2>Footer</h2>
        </div>
      </div>
    </div>
  );
}
