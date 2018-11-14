// React
import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.data = [
      89,
      30,
      25,
      32,
      72,
      70,
      51,
      42,
      25,
      24,
      53,
      55,
      78,
      50,
      13,
      40,
      48,
      32,
      26,
      2,
      14,
      33,
      45,
      72,
      56,
      44,
      21,
      88,
      27,
      68,
      15,
      62,
      93,
      98,
      73,
      28,
      16,
      46,
      87,
      28,
      65,
      38,
      67,
      16,
      85,
      63,
      23,
      69,
      64,
      91,
      9,
      70,
      81,
      27,
      97,
      82,
      6,
      88,
      3,
      7,
      46,
      13,
      11,
      64,
      76,
      31,
      26,
      38,
      28,
      13,
      17,
      69,
      90,
      1,
      6,
      7,
      64,
      43,
      9,
      73,
      80,
      98,
      46,
      27,
      22,
      87,
      49,
      83,
      6,
      39,
      42,
      51,
      54,
      84,
      34,
      53,
      78,
      40,
      14,
      5
    ];

    this.state = {
      linearAttempts: 0,
      binaryAttempts: 0,
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  linearSearch(data, targetValue) {
    let count = 0;

    for (let i = 0; i < data.length; i++) {
      const number = data[i];

      count++;

      if (number === targetValue) {
        this.setState({ linearAttempts: count });
      }
    }
  }

  binarySearch(data, targetValue, start, end, count = 0) {
    count++;
    console.log(count);

    var start = start === undefined ? 0 : start;
    var end = end === undefined ? data.length : end;

    if (start > end) {
      return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = data[index];

    if (item == targetValue) {
      console.log(count);
      this.setState({ binaryAttempts: count });
    } else if (item < targetValue) {
      return this.binarySearch(data, targetValue, index + 1, end, count);
    } else if (item > targetValue) {
      return this.binarySearch(data, targetValue, start, index - 1, count);
    } else {
      console.log('else');
      this.setState({
        binaryAttempts: `item not found after ${count} attempts`
      });
    }
  }

  handleChange(event) {
    console.log('handling change');
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <div>
          <form>
            <label>
              Linear
              <input type="text" name="search" onChange={this.handleChange} />
            </label>

            <button
              type="submit"
              onClick={event => {
                event.preventDefault();
                this.linearSearch(this.data, Number(this.state.value));
              }}
            >
              Search
            </button>
            <br />
            <br />
            <p>Linear attempts: {this.state.linearAttempts}</p>
          </form>
        </div>
        <div>
          <form>
            <label>
              Binary
              <input type="text" name="search" onChange={this.handleChange} />
            </label>

            <button
              type="submit"
              onClick={event => {
                event.preventDefault();
                this.data.sort();
                this.binarySearch(this.data, Number(this.state.value));
              }}
            >
              Search
            </button>
            <br />
            <br />
            <p>Binary attempts: {this.state.binaryAttempts}</p>
          </form>
        </div>
      </div>
    );
  }
}
