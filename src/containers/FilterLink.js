import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";
import Link from "../component/Link";

// Container for the visibility filter.
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
