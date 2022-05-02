# react-native-booking-ticket

Booking Ticket

## Installation

```sh
npm install react-native-booking-ticket
```
## screenshots
| Default layout | Pre-Booked/ Available seat layout | Selected seat layout |
| ------ | ------ | ------ |
|![Simulator Screen Shot - iPhone 11 - 2022-05-02 at 10 29 23](https://user-images.githubusercontent.com/82019401/166186700-25a71de7-872b-4837-a429-6ac1bd8d6d09.png) | ![Simulator Screen Shot - iPhone 11 - 2022-05-02 at 10 29 27](https://user-images.githubusercontent.com/82019401/166186704-85e323e5-08ec-4313-9f29-21d6b184a3ed.png) | ![Simulator Screen Shot - iPhone 11 - 2022-05-02 at 10 35 00](https://user-images.githubusercontent.com/82019401/166186706-eadb183c-eecb-42e0-89ab-44ac704935b8.png) |

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
| selectedSeats | _Array<SelectedSeats> (Optional)_ | Accepts value seatNumber `number` and seatType `number` which accepts value from (`booked` or `women` or `blocked`). Default its set to blank array. |
| seatImage | _AvaiableSeat (Optional)_ | Set your custom image for seat to display. |
| blockedSeatImage | _BlockedSeat (Optional)_ | Set your custom image for seat that is blocked or damaged to display. |
| driverImage | _DriverSeat (Optional)_ | Set your custom image for Driver to display. |
| numberTextStyle | _TextStyle (Optional)_ | Add your custom fonts, size, etc to the seat number text.|
| getBookedSeats | _function (Optional)_ | This function will retutns all the selected seats.|
## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
