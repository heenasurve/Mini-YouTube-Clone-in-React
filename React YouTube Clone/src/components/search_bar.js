/**
 * Created by Heena on 2/1/2018.
 */
import React,{Component} from 'react';

/*functional components
const SearchBar = () =>{
    return <input />;
};*/

//class component - when you need record keeping - state/props
class SearchBar extends Component{
    constructor(props){ // all JS classes have one - called for every instance
        super(props);   //calling super class constructor
        this.state = {term : ''}; //initializing state
    }

   /* onInputChange(event){ //event handler for event that occured on internal target
        //console.log(event.target.value);
        this.setState({term : event.target.value})
    }*/

    render(){        // or render : function() {}
        return (
            <div className="search-bar">
                <input
                    value = {this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                />
            </div>
        );
    }

    onInputChange(term){
        //set state with term
        this.setState({term});
        // also call callback
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;