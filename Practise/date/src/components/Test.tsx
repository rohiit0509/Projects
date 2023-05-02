type IStatusProp ={
    status?:'loading' | 'success' |"error"
}
const Test = (props:IStatusProp) => {
    let message;
    if(props.status==='loading'){
        message='Loading'
    }
    else if(props.status==='success'){
        message='Data fetched successfully'
    }
    else if(props.status==='error'){
        message='Error while fetching data'
    }
  return (
    <div>
       <h2> message: {message} </h2>
    </div>
  )
}

export default Test