const Box = props => {
  //  Write your code here.
  const {text, style} = props
  return(
  <div className={style} >
    <h1 className="bheading">{text}</h1>
    </div>
  )

}

const element = (
  //  Write your code here. 
  <div className="card">
    <h1 className="heading">Boxes</h1>
    <div className="boxCard">
      <Box text="Small" style="smallBox"/>
      <Box text="Medium" style="mediumBox"/>
      <Box text="Large" style="largeBox"/>

    </div>

  </div>
)

ReactDOM.render(element, document.getElementById("root"));
