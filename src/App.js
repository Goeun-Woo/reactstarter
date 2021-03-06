import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title : 'React',
    url : 'https://reactjs.org/',
    author : 'Jordan Walke',
    num_comments: 3,
    points : 4,
    objectID : 0,

  },
  {
    title:'Redux',
    url:'https://github.com/reactjs/redux',
    author:'Dan Abramov, Andrew Clark',
    num_comments:2,
    points:5,
    objectID:1,
  },
];


class App extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      list, 
      // 컴포넌트 외부에 위치한 list를 내부 상태로 정의하여 render 메소드에서 사용 가능하도록 함.
    };
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id) {
    function isNotId(item) {
      return item.objectID !== id;
    }
    const updatedList = this.state.list.filter(isNotId);
  }

  render() {
    return (
      <div className="App" >
       {this.state.list.map (item => {
         
         <div key = {item.objectID} >
         
            <span>
              <a href={item.url}> {item.title} </a>
            </span>
            
            <span>{item.author}</span>
            
            <span>{item.num_comments}</span>
            
            <span>{item.points}</span>
                <span>
                  <button
                    onClick={()=>this.onDismiss(item.objectID)}
                    type="button"
                    > 
                    dismiss 
                  </button>
                </span>
         </div>
         }
        )
       }
      </div>
    );
  }
}

export default App;
