// import React, { Component, PropTypes } from 'react';
// import Label from '../components/Label';
//
// class LabelsContainer extends Component {
//     constructor(props) {
//         super(props)
//     }
//     _renderLabels() {
//         return this.props.projectData.map((result, index) => {
//             const activeClass = this.props.selected === index
//                 ? 'label__link active'
//                 : 'label__link';
//
//             return (
//                 <Label
//                     key={ index }
//                     activeClass={ activeClass }
//                     onSelectLabel={ this.props.onSelectLabel(index) }
//                     workTitle={ this.props.projectData[index].label } />
//             )
//         })
//     }
//
//     render() {
//         return (
//             <div className='tabs__labels'>
//                 { this._renderLabels() }
//             </div>
//         )
//     }
// }
//
// LabelsContainer.propTypes = {
//     selected: PropTypes.number.isRequired,
//     onSelectLabel: PropTypes.func.isRequired,
//     projectData: PropTypes.object.isRequired,
// }
//
// export default LabelsContainer;
