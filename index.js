function App(){
    return <div style={{display:"flex"}}>
        <Card innerContent={<div style={{color:"green",borderRadius:5}}>
            i am learn <br/>
            <input type={"text"}
            </input>

        </div>}/>
        <Card innerContent={"hi there"}></Card>
    </div>
}
function Card {(innerContent)}{
    return <div style={{color:white,borderRadius:4,backGround:yellow,padding:10}}>
        {innerContent}
    </div>
}
