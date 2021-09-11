import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import { RoomConsumer } from '../Context'
import Loading from './Loading'

//in RoomConsumer we create a function called Render prop, as we can not use this.consumer as in class components and instead of using higher order component route
export default function RoomsContainer() {
  return (
    <RoomConsumer>
      {value => {
        const {loading, sortedRooms, rooms} = value

        if(loading){
          return <Loading/>
        }
          return (
            <>
              <RoomsFilter rooms={rooms} />
              <RoomsList rooms={sortedRooms} />
            </>
          );
        }
      }
    </RoomConsumer>

  )
}