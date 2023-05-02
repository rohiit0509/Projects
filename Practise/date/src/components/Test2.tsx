type ReactProps ={
    children:React.ReactNode;
}
const Test2 = (props:ReactProps) => {
  return (
    <div>{props.children}</div>
  )
}

export default Test2