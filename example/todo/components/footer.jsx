import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listFilter,SHOW_COMPLETE,SHOW_ALL,SHOW_ACTIVE } from '../Actions'

class Footer extends Component {
	
	render() {
		const { Filter,active } = this.props;
		const filterActive = {
			backgroundColor : '#ff6666',
			color : "#fff"
		};
		return(
			<div>
				<div>
					<span style={ active === SHOW_ALL ? filterActive : {} } onClick={()=>{Filter(SHOW_ALL)}}> SHOW-ALL </span>
					<span style={active === SHOW_ACTIVE ? filterActive : {}} onClick={()=>{Filter(SHOW_ACTIVE)}}> ACTIVE </span>
					<span style={active === SHOW_COMPLETE ? filterActive : {}} onClick={()=>{Filter(SHOW_COMPLETE)}}> COMPLETE </span>
				</div>
			</div>
		)
	}
}
const mapStateToProps = (state, ownProps) =>{
	return{
		active : state.filter
	}
}
const mapDispatchToProps = (dispatch) =>{
	return{
		Filter : (filter)=>dispatch(listFilter(filter))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer)