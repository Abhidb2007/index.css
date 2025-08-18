import React,{component} from 'react';
class classCounter extends component{
    state={count:5};
    increament(){
        this.setState({count:this.state.count+1});
    };
    render(){
        return(
            <div>
                <p>Count:{this.state.count}</p>
                <button onClick={this.state.count}></button>
            </div>
        )
    }
}