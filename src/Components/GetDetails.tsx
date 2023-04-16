import { useEffect, useState } from "react"
import { Button, Container, Form, Spinner } from "react-bootstrap"
import { useContractRead } from 'wagmi'
import getWalletDetailsAbi from '../../abi.json'
import { ethers } from "ethers"
 
const Result = (props:any) => {
    const { data, isError, isLoading } = useContractRead({
        address: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
        abi: getWalletDetailsAbi,
        functionName: 'positions',
        args:props.args,
    })
    
    const RenderResult = (props:any) => {
        let keys:any = Object.keys(props.data)
        let values:any = Object.values(props.data)
        return(<>
                {keys.map((key:any,index:any)=>{
                    return (
                        <div key={`result_${index}`}> 
                            {key.toString()} : {values[index].toString()}
                        </div>
                    )
                })
            }
        </>)
    }
  return(
    <div className="mt-3"> 
           {isLoading ? <div className="d-flex align-items-center"><Spinner  as="span"
          animation="border"
          variant="primary"
          className="me-2"
          aria-hidden="true"/> Loading</div> : <>
                {data && <RenderResult data={data}/>}
                {isError && props.args  && <span className="text-danger">Something went wrong</span>}
            </>
        }
     </div>
  )
}

const GetDetails = () => {
    const [tokenId, setTokenId] = useState<any>("")
    const [args,setArgs] = useState<any>()
    const [showResult, setShowResult] =  useState<any>(false)
    useEffect(()=>{
        if(args !== "" || args !== null){
            setShowResult(true)
        }
    },[args])
    const onChangeHandler = (event:any) =>{
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            setTokenId(event.target.value)
        }
    }
    const onSubmit = () =>{
        if(tokenId !== ""){
            let data = ethers.BigNumber.from(tokenId)
            setArgs([data])
            setTokenId("")
        }else{
            setTokenId("")
        }
    }
    return(
        <Container>
            <Form.Control 
                placeholder="Enter Token Id"
                className="mb-2"
                onChange={(e:any)=>onChangeHandler(e)}
                value={tokenId}
            />
            <Button type="button" disabled={!tokenId} onClick={onSubmit}>Get Details</Button>
            {showResult &&  <Result args={args} /> }
        </Container>
    )
}
export default GetDetails
