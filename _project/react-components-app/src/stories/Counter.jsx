
import Buttom, { Button } from './Button'
export default function Counter() {
    
    const handlerOnClick =(evtType) => {
        if(evtType == "ADD") {
            console.log('add button click')
            return
        }
        console.log('sub button click')
    }

    return (
        <>
            <span>Counter: {}</span>
            <Button label ="+" onClick={()=> handlerOnClick("ADD")} backgroundColor="Green" />
            <Button label ="-" onClick={()=> handlerOnClick} backgroundColor="Red" />
        </>
    );

}