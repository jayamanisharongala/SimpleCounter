import React,{Component} from 'react'
 class Count extends Component{
     constructor(props){
         super(props)
         this.state={
             count:0
         }
     }
     increment(){
         this.setState({
             count:this.state.count +1,
             colour:this.state.count>=0?'green':'red'
         })
     }
     reset(){
         this.setState({
             count:0,
             colour:'black'
         })
     }
     decrement(){
         this.setState({
             count:this.state.count - 1,
             colour:this.state.count<=0?'red':'green'
         })
     }
     render(){
         const{count}=this.state;
         return(
             <div>
                 <div> <h2 className='primary'>COUNTER</h2> </div>
                 <div><h2 className='primary' style={{color:this.state.colour}}>{count}</h2></div>
                 <button  onClick={() => this.increment()} >INCREMENT</button>
                 <button onClick={() =>this.reset()} >RESET</button>
                 <button onClick={() =>this.decrement()}>DECREMENT</button>
             </div>
         )
     }
 }
 export default Count