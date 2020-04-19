import React, { FC } from "react";
import { Row, Col } from "./components/Grid";
import {
  PointNameInput,
  ListContainer,
  YandexMap,
  MessageList
} from "./containers";
import { useDataState } from "./core/hooks";
import "./styles/style.scss";

const App: FC = () => {
  const [
    { loading, points, messages },
    {
      addPointAction,
      removePointAction,
      movePointAction,
      skipMessageAction,
      changeMapCenter,
      changePointCoordinateAction,
      startLoadingAction,
      stopLoadingAction,
      setMessageAction
    }
  ] = useDataState();

  return (
    <>
      <MessageList messages={messages} skipMessage={skipMessageAction} />
      <Row>
        <Col width={250} className="left-column">
          <PointNameInput disabled={loading} addPoint={addPointAction} />
          <ListContainer
            list={points}
            deleteItem={removePointAction}
            moveItem={movePointAction}
          />
        </Col>

        <Col>
          <YandexMap
            loading={loading}
            points={points}
            changeCenter={changeMapCenter}
            changePointCoordinate={changePointCoordinateAction}
            startLoading={startLoadingAction}
            stopLoading={stopLoadingAction}
            setError={setMessageAction}
          />
        </Col>
      </Row>
    </>
  );
};

export default App;
