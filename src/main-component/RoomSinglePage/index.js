import React, { Fragment, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import RoomSingleSection from '../../components/RoomSingleSection';
import { useParams } from 'react-router';
import axios from 'axios';

const RoomSinglePage = () => {
  const [roomSingle, setRoomSingle] = useState(null);
  console.log(roomSingle);
  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_API}/api/room?id=${id}`).then((data) => {
      setRoomSingle(data?.data);
    });
  }, [id]);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Fragment>
      {roomSingle && (
        <>
          <Navbar />
          <PageTitle pageTitle={roomSingle?.NAME} pagesub={roomSingle?.NAME} img={roomSingle?.IMG_BANNER} />
          <RoomSingleSection value={roomSingle} />
          <Footer />
          <Scrollbar />
        </>
      )}
    </Fragment>
  );
};
export default RoomSinglePage;
