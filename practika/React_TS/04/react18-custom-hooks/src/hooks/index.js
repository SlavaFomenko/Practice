
import React from "react";

export function withUseDownloadData(Component,getData) {
  return class useDownloadData extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      isLoading:[false],
      error:null
    }
  }
  load = () => {
    this.setState({isLoading:true})
    getData()
      .then(data =>  this.setState({data:data}))
      .catch(error =>  this.setState({error:error}))
      .finally(() =>  this.setState({isLoading:false}))
  }

  componentDidMount() {
    this.load();
  }

  render(){
    return(
        <Component data={this.state.data} isLoading={this.state.isLoading} error={this.state.error} {...this.props}/>
    );
    }
  }
}