# @mindinventory/react-native-bus-seat-layout [![](https://img.shields.io/npm/v/@mindinventory/react-native-tab-bar-interaction.svg)](https://www.npmjs.com/package/@mindinventory/react-native-tab-bar-interaction)

A <i>@mindinventory/react-native-bus-seat-layout</i> library provides seats layout for bus booking, you can give custom styles of seat numbers. also can give images for seat. you have to provide number of rows that you need to draw layout, you will get selected seats from props.

## Installation
using npm:
```sh
npm install @mindinventory/react-native-bus-seat-layout
```
using yarn:
```sh
yarn add @mindinventory/react-native-bus-seat-layout
```

## Preview
![Simulator Screen Recording - iPhone 13 - 2022-11-08 at 12 11 31](https://user-images.githubusercontent.com/82019401/200493768-018edf43-c756-4d22-ab65-464a7be76114.gif)
![Simulator Screen Recording - iPhone 13 - 2022-11-08 at 11 50 06](https://user-images.githubusercontent.com/82019401/200490528-056ee01f-1130-4fff-b1f2-2ef35ef13db8.gif)


### Supported platform
- Android
- Ios

## Usage
```js
import SeatsLayout from "@mindinventory/react-native-bus-seat-layout";
```

```js

<SeatsLayout
    row={14}
    layout={{ columnOne: 3, columnTwo: 2 }}
    selectedSeats={[
        { seatNumber: 1, seatType: 'booked' },
        { seatNumber: 11, seatType: 'women' },
        { seatNumber: 17, seatType: 'women' },
        { seatNumber: 43, seatType: 'blocked' },
    ]}
    numberTextStyle={{ fontSize: 12 }}
    seatImage={{ image: SleeperSeatIcon, tintColor: '#B2B2B2' }}
    getBookedSeats={(seats) => {
        console.log('getBookedSeats :: ', seats);
    }}
/>
```


# Props to use
| Parameter       | Type                              | Description                                                                         |
| --------------- | --------------------------------- | -----------                                                                         |
| row             | _number_                          | Set number of rows to draw seat layout.                                             |
| layout          | _Layout (Optional)_               | Default value `columnOne: 2` & `columnTwo: 2`.                                      |
| driverPosition  | _string (Optional)_               | Accepts string args among `left` or `right`. Default is `right`.                    |
| isSleeperLayout | _boolean (Optional)_              | Accepts boolean value either `true` or `false`. Default is `false`.                 |
| maxSeatToSelect | _number (Optional)_               | Allow uset to select maximum number of seats to book in one go. Default value `7`.  |
| selectedSeats   | _Array<SelectedSeats> (Optional)_ | Accepts value seatNumber `number` and seatType `number` which accepts value from (`booked` or `women` or `blocked`). Default its set to blank array.                                                                         |

## Contributing!

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License!

@mindinventory/react-native-bus-seat-layout [MIT-licensed](https://github.com/TusharSanchaniya-mi/mi-react-native-seat-layout/blob/main/LICENSE).

# Let us know!

If you use our open-source libraries in your project, please make sure to credit us and Give a star to www.mindinventory.com

<p><h4>Please feel free to use this component and Let us know if you are interested to building Apps or Designing Products.</h4>
<a href="https://www.mindinventory.com/contact-us.php?utm_source=gthb&utm_medium=repo&utm_campaign=react-native-bus-seat-layout" target="__blank">
<img src="https://github.com/Sammindinventory/MindInventory/blob/main/hirebutton.png" width="203" height="43"  alt="app development">
</a>
