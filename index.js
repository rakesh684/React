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