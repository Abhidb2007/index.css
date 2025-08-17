function App(){
    return <div style={{display:"flex"}}>
        <Card innerContent={<div style={{color:"green",borderRadius:5}}>
            i am learn <br/>
            <input type={"text"}>
            </input>

        </div>}/>
        <Card innerContent={"hi there"}></Card>
    </div>


}