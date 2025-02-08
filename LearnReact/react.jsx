const root = ReactDOM.createRoot(app);

// function Header({title}) {
function Header(props) {
  var { title } = props;
  //   console.log("title", title);
  //   return <h1>Title: {title}</h1>;
  //   return <h1>{`Cool: ${title}`}</h1>;
  // console.log("value" + title); //simple
  // console.log(`value ${title}`); //template literals
  //   return <h1>{`Cool: ${title}`}</h1>;
  return <h1>{title ? title : "Default value"}</h1>;
}

// var map=function(){

// }
// var arrowFunction=()=>{

// }
// var array = ["item1", "item2", "item3"];

// console.log(
//   "item",
//   array.map((item) => item+"12")
// );

function List() {
  var fruits = ["mango", "banan", "orange", "pineaple"];
  return (
    <ul>
      {fruits.map((item, index) => {
        console.log("item", item);
        console.log("index", index);
        return <li key={index}>{item + index}</li>;
      })}
    </ul>
  );
}

function ServiceCard(props) {
  var { title, description } = props;
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function HomePage() {
  // var counter=0
  const [counter, setCounter] = React.useState(0);
  const [showPara, setShowPara] = React.useState(true);
  const services = [
    {
      title: "Mobile App devleompnet",
      description: "a quick brown fox ",
    },
    {
      title: "Web Development",
      description: "a quick brown fox ",
    },
  ];

  const handleIncrement = () => {
    setCounter(counter + 1); // counter++
    //  counter++ ->counter=counter+1
    // setCounter(10) // counter=10
    console.log("🚀 ~ handleIncrement ~ counter:", counter);
  };
  const handleDeccrement = () => {
    setCounter(counter - 1); // counter--
    // setCounter(9); // counter=9

    console.log("🚀 ~ handleDecrement ~ counter:", counter);
  };

  // const handleShowPara = () => {
  //   setShowPara(true);
  //   console.log("🚀 ~ handleShowPara ~ setShowPara:", showPara);
  // };
  // const handleHidePara = () => {
  //   setShowPara(false);
  //   console.log("🚀 ~ handleHidePara ~ setShowPara:", showPara);
  // };
  const handlePara=()=>{
    setShowPara(!showPara)
  }
  console.log("main counter", counter);
  console.log("main show para", showPara);
  return (
    <div>
      <Header title="Counter" />
      <button onClick={handleDeccrement}>-</button>
      <span>{counter}</span>
      <button onClick={handleIncrement}>+</button>
      {/* <Header title="Heading 2" /> */}
      {/* <Header />

      <List />

      <div>
        {services.map((item, index) => {
          console.log("🚀 ~ <div>{services.map ~ item:", item);
          return (
            <div key={index}>
              <ServiceCard title={item.title} description={item.description} />
            </div>
          );
        })}
      </div> */}
      
      {/* {showPara ? (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, minus
          nobis sapiente maiores dolore laudantium odit provident harum eligendi
          ex consequuntur nemo? At fugiat quidem, optio impedit perspiciatis
          quibusdam nulla.
        </p>
      ) : (
        <p></p>
      )} */}
      {showPara  && (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
          fugiat ducimus, cumque in quis ipsum. Delectus nobis voluptatem
          voluptatum quos numquam, tempore illum inventore, minima optio sunt
          vitae hic voluptates.
        </p>
      )}
      {/* <button onClick={handlePara}>Show Para</button>
      <button onClick={handlePara}>Hide Para</button> */}
      <button onClick={handlePara}>{showPara?"Hide Para":"Show Para"}</button>
    </div>
  );
}
root.render(<HomePage />);
