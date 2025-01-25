const root = ReactDOM.createRoot(app);

// function Header({title}) {
function Header(props) {
  var { title } = props;
  //   console.log("title", title);
  //   return <h1>Title: {title}</h1>;
  //   return <h1>{`Cool: ${title}`}</h1>;
  console.log("value" + title); //simple
  console.log(`value ${title}`); //template literals
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
  return (
    <div>
      <Header title="Heading 1" />
      <Header title="Heading 2" />
      <Header />

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
      </div>
    </div>
  );
}
root.render(<HomePage />);
