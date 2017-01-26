var React = require('react');

var ListingsTable = React.createClass({



  getInitialState: function() {
    return {
       columnA: ['row1a', 'row2a', 'row3a', 'row4a', 'row5a'],
       columnB: ['row1b', 'row2b', 'row3b', 'row4b', 'row5b'],
       columnC: ['row1c', 'row2c', 'row3c', 'row4c', 'row5c'],
       columnD: ['row1d', 'row2d', 'row3d', 'row4d', 'row5d']
    }
  },



  render: function() {


    var tableStyle = {
          padding: 15,
          margin: 15,
          backgroundColor: "#ffde00",
          color: "#333",
          display: "inline-block",
          fontFamily: "monospace",
          fontSize: "25",
          textAlign: "center"
        };

    var tableData = this.props.tableData.map(function(listing, i) {
//          <td>{listing.client_id.name}</td>
//          <td>{listing.material_id.materialType}</td>
    const name = (listing.client) ? listing.client.name : ''
    const name1 = (listing.material) ? listing.material.materialType : ''
      return (
        <tr>
          <td key={i+1}>{listing.runs}</td>
          <td key={i+2}>{listing.printSize}</td>
          <td key={i+3}>{listing.price}</td>
          <td key={i+4}>{name}</td>
          <td key={i+5}>{name1}</td>
        </tr>
      );
    }.bind(this));


    return (
      <div style={tableStyle}>
        <table className="table">
          <tr >
           <th>Runs</th>
           <th>Print Size</th>
           <th>Print Price</th>
           <th>Client Name</th>
           <th>Material Type</th>
           </tr>
           <tbody>{tableData}</tbody>
        </table>
      </div>
    );
  }
});

module.exports = ListingsTable;
