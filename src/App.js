import React,{Component} from 'react';
import CourseForm from './Components/CourseForm';
import CourseList from './Components/CourseList';
import './App.css';


class App extends Component {
  state = {
    courses:[
      {name:"HTML"},
      {name:"CSS"},
      {name:"JS"}
    ],
    current:''
  };

  updateCourse = (e)=>{
    this.setState({
      current:e.target.value
    })
  }

  addCourse=(e,val)=>{
    e.preventDefault();
    const courses=this.state.courses;
    const current=this.state.current;
    courses.push({name:current});
    this.setState({
      courses,
      current:''
    })
  }

  deleteCourse=(index)=>{
    const courses=this.state.courses;
    courses.splice(index,1);
    this.setState({
      courses
    })
  }

  editCourse=(index,value)=>{
    let courses=this.state.courses;
    let course =courses[index];
    course.name=value;
    this.setState({
      courses
    })
  }
  render(){
    const {courses} =this.state;
    const courseList =courses.map((e,index)=>{
      return(<CourseList key={index} details={e} index={index} delete={this.deleteCourse} edit={this.editCourse}/>)
    })

    return (
      <section className="App">
        <h2>Add Courses</h2>
        <CourseForm update={this.updateCourse} add={this.addCourse} currVal={this.state.current}/>
        <ul>{courseList}</ul>
      </section>
    );
  }
}

export default App;
