import React,{Component} from 'react';

class CourseList extends Component {
    state={
        isEdit:false
    }
    renderCourses =()=>{
        return(
            <li>
                <span>{this.props.details.name }</span>
                <button onClick={this.toggleState}>Edit Course</button>
                <button onClick={()=>this.props.delete(this.props.index)}>Delete Course</button>
            </li>
        )
    }
    toggleState=()=>{
        const{isEdit}=this.state;
        this.setState({
            isEdit:!isEdit
        });     
    }
    blur=()=>{
        if(this.input.value===this.input.defaultValue){
            console.log(this.input.value===this.input.defaultValue)
            this.toggleState();
            return;
        }
        else{
            this.props.edit(this.props.index,this.input.value);
            this.toggleState();
        }
    }
    updateCourseItem=(e)=>{
        e.preventDefault(); 
        this.props.edit(this.props.index,this.input.value);
        this.toggleState();
    }

    renderUpdateForm=()=>{             
        return(
            <form onSubmit={this.updateCourseItem}>
                <input autoFocus type="text" ref={(v)=>{this.input=v}} defaultValue={this.props.details.name} onBlur={this.blur}/>
                <button>Update Course</button>
            </form>
        )        
    }

    render(){        
       return(
           <>
              {this.state.isEdit ?this.renderUpdateForm() :this.renderCourses()}
           </>
       )
    }    
}
export default CourseList;