# react-native-booking-ticket

Booking Ticket

## Installation

```sh
npm install react-native-booking-ticket
```

## Usage

```js
import SeatsLayout from "react-native-booking-ticket";
```
# Props to use
| Parameter | Type | Description |
| ------    | ------ | ------ |
| row | _number_ | Set number of rows to draw seat layout. |
| layout | _Layout (Optional)_ | Default value `columnOne: 2` & `columnTwo: 2`. |
| driverPosition | _string (Optional)_ | Accepts string args among `left` or `right`. Default is `right`. |
| isSleeperLayout | _boolean (Optional)_ | Accepts boolean value either `true` or `false`. Default is `false`. |
| maxSeatToSelect | _number (Optional)_ | Allow uset to select maximum number of seats to book in one go. Default value `7`. |
| selectedSeats | _Array<SelectedSeats> (Optional)_ | Accepts value seatNumber `number` and seatType `number` which accepts value from (`booked' | `women` | `blocked`). Default its set to blank array. |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
