import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  Image,
  Text,
  ImageBackground,
} from 'react-native';
import type {
  DriverPosition,
  Layout,
  SeatLayout,
  SelectedSeats,
} from './types';
import {
  blockedSource,
  instructionSeatLayout,
  layoutImage,
  mainContainerStyle,
  selectedSeatColor,
} from './styles';
import SeatContainer from './component/SeatContainer';

export interface SeatsLayoutProps {
  row: number;
  layout: Layout;
  driverPosition?: DriverPosition;
  isSleeperLayout?: boolean;
  maxSeatToSelect?: number;
  selectedSeats?: Array<SelectedSeats>;
}
const SeatsLayout: React.FC<SeatsLayoutProps> = ({
  row = 10,
  layout = { columnOne: 2, columnTwo: 2 },
  isSleeperLayout = false,
  driverPosition = 'right',
  maxSeatToSelect = 7,
  selectedSeats = [],
}) => {
  const [bookingSeat, setBookingSeat] = useState<Array<Array<SeatLayout>>>([]);
  const [userSelectedSeats, setUserSelectedSeat] = useState<Array<SeatLayout>>(
    []
  );
  const isEntryDoorAtFront = true;

  useEffect(() => {
    let allArray: Array<Array<SeatLayout>> = [];
    let i = 0;
    let seatNumber = 1;

    while (i < row) {
      let j = 0;
      let seatArray: Array<SeatLayout> = [];
      if (i == 0 && j == 0) {
        // Add Bus layout has at front door
        // if (isEntryDoorAtFront) {
        let seatLayout: SeatLayout = {
          id: `${i},${j}`,
          type: driverPosition == 'left' ? 'driver' : 'emptySpace',
          // type: driverPosition == 'left' ? 'driver' : 'emptySpace',
        };
        seatArray.push(seatLayout);
        // }

        //Render empty space to show driver seat at last row and
        while (j < layout.columnOne + layout.columnTwo) {
          let iTotalColumn = layout.columnOne + layout.columnTwo;
          if (j == iTotalColumn - 1) {
            let seatLayout: SeatLayout = {
              id: `${i},${j}`,
              type: driverPosition == 'left' ? 'emptySpace' : 'driver',
              // type: driverPosition == 'left' ? 'emptySpace' : 'driver',
            };
            seatArray.push(seatLayout);
          } else {
            let seatLayout: SeatLayout = {
              id: `${i},${j}`,
              type: 'emptySpace',
            };
            seatArray.push(seatLayout);
          }
          if (!isEntryDoorAtFront && j == layout.columnOne - 1) {
            let seatLayout: SeatLayout = {
              id: `${i},${j}`,
              type: 'emptySpace',
            };
            seatArray.push(seatLayout);
          }
          j += 1;
        }
      } else {
        //Set Index value in id to all seat type for to make them selectable.
        let bSpaceAdded = false;
        let revCounter = i * (layout.columnOne + layout.columnTwo);

        while (j < layout.columnOne + layout.columnTwo) {
          let preSelectedSeatItem = selectedSeats.filter((item) => {
            return (
              item.seatNumber ==
              (i % 2 == 0 || i != row - 1 ? revCounter : seatNumber)
            );
          });

          let seatLayout: SeatLayout = {
            id: `${i},${bSpaceAdded ? j + 1 : j}`,
            type:
              preSelectedSeatItem.length > 0
                ? preSelectedSeatItem[0].seatType
                : 'available',
            seatNo: i % 2 == 0 || i != row - 1 ? revCounter : seatNumber,
            isSeatSeleced: preSelectedSeatItem.length > 0,
          };

          seatArray.push(seatLayout);
          if (j == layout.columnOne - 1) {
            let seatLayout: SeatLayout = {
              id: `${i},${j + 1}`,
              type:
                i == row - 1
                  ? preSelectedSeatItem.length > 0
                    ? preSelectedSeatItem[0].seatType
                    : 'available'
                  : 'emptySpace',
              seatNo: i % 2 == 0 || i != row - 1 ? revCounter : seatNumber,
              isSeatSeleced:
                i == row - 1 ? preSelectedSeatItem.length > 0 : false,
            };
            seatArray.push(seatLayout);
            bSpaceAdded = true;
          }
          j += 1;
          revCounter -= 1;
          if (j == 0) {
            let newSeatNumber = seatNumber;
            newSeatNumber -= seatNumber;
            seatNumber += 1;
          } else {
            seatNumber += 1;
          }
        }
      }
      allArray.push(seatArray);
      i += 1;
    }
    setBookingSeat(allArray);
  }, []);

  const onSeatSelected = useCallback(
    (seat: SeatLayout) => {
      let allChangedItem: Array<Array<SeatLayout>> = bookingSeat;
      const { id } = seat;
      const arrindexs: Array<number> = id
        .split(',')
        .map((item) => Number(item));
      let changeItem = seat;
      changeItem.type = changeItem.type == 'available' ? 'booked' : 'available';
      changeItem.isStatusChange = true;
      allChangedItem[arrindexs[0]][arrindexs[1]] = changeItem;

      setBookingSeat([...allChangedItem]);
      getSelectedSeats([...allChangedItem]);
    },
    [bookingSeat]
  );

  const getSelectedSeats = (bookingSeatArg: Array<Array<SeatLayout>>) => {
    let filterSelectedSeats = bookingSeatArg.flatMap((rowSeatArr) => {
      return rowSeatArr.filter((rowSeat) => {
        return rowSeat.type == 'booked';
      });
    });
    setUserSelectedSeat(filterSelectedSeats);
  };

  const renderSeatlayout = (item: Array<SeatLayout>, index: number) => {
    return (
      <SeatContainer
        item={item}
        index={index}
        isSleeperLayout={isSleeperLayout}
        disableSeat={userSelectedSeats.length == maxSeatToSelect}
        onSeatSelected={(seat) => {
          onSeatSelected(seat);
        }}
      />
    );
  };

  let arrPreviewSeats: Array<SeatLayout> = [
    {
      id: '1',
      type: 'available',
      isStatusChange: false,
    },
    {
      id: '2',
      type: 'booked',
      isStatusChange: false,
    },
    {
      id: '3',
      type: 'women',
      isStatusChange: false,
    },
    {
      id: '4',
      type: 'blocked',
      isStatusChange: false,
    },
  ];

  const renderSeatConfig = (seatData: SeatLayout) => {
    return (
      <>
        {seatData.type == 'blocked' ? (
          <ImageBackground
            source={layoutImage[seatData.type]}
            style={{
              height: 35,
              width: 35,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 5,
            }}
            imageStyle={{
              tintColor: selectedSeatColor[seatData.type],
              alignSelf: 'center',
            }}
            resizeMode="cover"
          >
            <Image
              source={blockedSource}
              style={{
                height: '45%',
                width: '45%',
              }}
            />
          </ImageBackground>
        ) : (
          <Image
            source={layoutImage[seatData.type]}
            style={{
              height: 35,
              width: 35,
              tintColor: selectedSeatColor[seatData.type],
              marginRight: 5,
            }}
            resizeMode="contain"
          />
        )}

        <Text style={{ textTransform: 'capitalize', marginRight: 5 }}>
          {seatData.type}
        </Text>
      </>
    );
  };

  return (
    <SafeAreaView>
      <View style={mainContainerStyle}>
        <View style={instructionSeatLayout}>
          {arrPreviewSeats.map((item: SeatLayout) => renderSeatConfig(item))}
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}
          bounces={false}
          data={[...bookingSeat]}
          renderItem={({ item, index }) => {
            return renderSeatlayout(item, index);
          }}
          keyExtractor={() => Math.random().toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(SeatsLayout);
