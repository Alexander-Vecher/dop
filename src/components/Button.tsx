
type PropsType={
    name: string
    callBack: ()=>void
}

export const Button =(props:PropsType)=>{
const  onClickHundler=()=>{
        props.callBack()
}
return( <button onClick={onClickHundler}>{props.name}</button>)
}