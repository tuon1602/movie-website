import React, { useEffect, useState } from "react";
import { useMyCollectionStore } from "../../store/store";
import {
  Col,
  Row,
  Typography,
  Card,
  Image,
  Button,
  Popconfirm,
  message,
  Modal
} from "antd";
import { useNavigate } from "react-router-dom";
import { ExclamationCircleFilled } from '@ant-design/icons';

const { Title } = Typography;
const { Meta } = Card;
const { confirm } = Modal;

const Collection = (props) => {
  const navigate = useNavigate();
  //zustand
  const myCollectionStore = useMyCollectionStore((state) => state.collection);
  console.log(localStorage.getItem('my-collection-store'))
  const removeFromCollection = useMyCollectionStore((state)=>state.removeFromCollection)
  //react state
  const handleNavigateDetail = (movieId, media_type) => {
    navigate(`/detail/${movieId}`, {
      state: { movieId: movieId, type: media_type },
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleDeleteOne = (id,type)=>(e) =>{
    e.stopPropagation();
    confirm({
        title: 'Are you sure delete this movie?',
        icon: <ExclamationCircleFilled />,
        content: 'Remove this movie from your collection',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
            removeFromCollection({movieId:id,type:type})
            window.location.reload(true)
        },
        onCancel() {
          console.log('Cancel');
        },
      });
  }
  const handleDeleteAll=(e) =>{
    e.stopPropagation();
    confirm({
        title: 'Are you sure delete all?',
        icon: <ExclamationCircleFilled />,
        content: 'Remove all your collection movies',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          localStorage.clear()
          window.location.reload(true)
        },
        onCancel() {
          console.log('Cancel');
        },
      });
  }
  return (
    <main style={{ paddingTop: "10rem", backgroundColor: "#04284e" }}>
      <Row justify="center">
        <Col style={{ display: "flex", flexDirection: "column" }}>
          <Title style={{ color: "#b1a21e" }}>{props.title}</Title>
         {myCollectionStore.length===0 ? <Button disabled danger type="primary" size="large" style={{color:"white"}} onClick={handleDeleteAll}>
            Delete all
          </Button>:<Button danger type="primary" size="large" onClick={handleDeleteAll}>
            Delete all
          </Button>} 
        </Col>
      </Row>
      <Row justify="center">
        <Col style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          {myCollectionStore.length!=0 ? (myCollectionStore.map((item, index) => (
            <Card
              key={item.movieId}
              hoverable
              style={{ width: "256px", marginTop: "2rem" }}
              cover={
                <Image
                  alt={item.name}
                  src={`https://image.tmdb.org/t/p/original${item.img}`}
                  height={400}
                  preview={false}
                />
              }
              onClick={() => handleNavigateDetail(item.movieId, item.type)}
            >
              <Meta title={item.name} />
              <Button
                size="middle"
                style={{ marginTop: "1rem" }}
                type="primary"
                danger
                onClick={handleDeleteOne(item.movieId,item.type)}
              >
                Delete
              </Button>
            </Card>
          ))):(
            <Title style={{color:"white",padding:"5rem 0"}}>WTF please add movie to your collection @@</Title>
          )}
        </Col>
      </Row>
    </main>
  );
};

export default Collection;
