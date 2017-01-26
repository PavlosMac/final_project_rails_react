var React = require('react');

var PricingTable = React.createClass({



  getInitialState: function() {
    return {
      columnA: ['row1a', 'row2a', 'row3a', 'row4a', 'row5a'],
      columnB: ['row1b', 'row2b', 'row3b', 'row4b', 'row5b'],
      columnC: ['row1c', 'row2c', 'row3c', 'row4c', 'row5c'],
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

    var results = this.props.songs.map(function(song, i) {

      return (
        <tr>
          key={i}
          <td>{i+1}</td>
          <td>{song["im:name"].label}</td>
          <td>{song["im:artist"].label}</td>
          <td><img src={song["im:image"][2].label}></img></td>
        </tr>
      );
    }.bind(this));

    return (
      <div style={tableStyle}>
        <table className="table">
          <tr>
           <th>Charts At</th>
           <th>Song Title </th>
           <th>Artist</th>
           <th>Cover</th>
         </tr>
         {results}
        </table>
      </div>
    );
  }
});

module.exports = SongTable;
