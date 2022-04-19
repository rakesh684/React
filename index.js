// ReactDOM.render(<h1>Hello, everyone</h1>,document.getElementById("root"));
ReactDOM.render(
<ul>
    <li>rakesh</li>
    <li>Ravi</li>
</ul>,
document.getElementById("#root"));

function MainContent (){
      return(
          <h1>I'am learning React</h1>
      )
}
ReactDOM.render(
    <div>
        <MainContent/>
    </div>,
    document.getElementById("root")
);

const h1=document.createElement("h1");
h1.textContent="This is rakesh here , May I help you ?";
h1.className="body";
document.getElementById("root").append(h1);