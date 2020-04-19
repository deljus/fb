import React, { FC, useEffect, useState } from "react";
import { YMaps, Map as BaseMap, Placemark, Polyline } from "react-yandex-maps";
import { Loader } from "../../components";
import { DEFAULT_MAP_CENTER } from "../../config";
import { preparePlaceMarkProps } from "./utils";
import { YandexMapInterface, PointType } from "./types";

const YandexMap: FC<YandexMapInterface> = ({
  startLoading,
  stopLoading,
  loading,
  changeCenter,
  points,
  changePointCoordinate,
  setError
}) => {
  const [dPoint, setPoint] = useState<Array<PointType>>([]);

  useEffect(() => {
    if (startLoading) startLoading();
  }, []);

  const handleLoading = (): void => {
    if (stopLoading) stopLoading();
  };

  const handleError = (): void => {
    if (setError) setError("map-error", "Something went wrong :(");
  };

  const handleDrugStart = (id: string) => (e: any): void => {
    const dragPoint = points.find((p: PointType) => p.id === id);
    if (dragPoint) setPoint([{ ...dragPoint, id: "id" }]);
  };

  const handleDrugEnd = (id: string) => (e: any): void => {
    setPoint([]);

    if (changePointCoordinate)
      changePointCoordinate(id, e.originalEvent.target.geometry._coordinates);
  };

  const onBoundsChange = (e: any) => {
    if (changeCenter) changeCenter(e.get("target").getCenter());
  };

  return (
    <>
      <Loader loading={loading} />
      <div className="ymap">
        <YMaps>
          <BaseMap
            onLoad={handleLoading}
            onError={handleError}
            onBoundsChange={onBoundsChange}
            width="100%"
            height="100vh"
            defaultState={{ center: DEFAULT_MAP_CENTER, zoom: 9 }}
          >
            {[...dPoint, ...points].map((point: PointType) => (
              <Placemark
                {...preparePlaceMarkProps(point)}
                key={point.id}
                onDragEnd={handleDrugEnd(point.id)}
                onDragStart={handleDrugStart(point.id)}
              />
            ))}
            <Polyline
              geometry={points.map(point => point.coordinates)}
              options={{
                balloonCloseButton: false,
                strokeColor: "#000",
                strokeWidth: 4,
                strokeOpacity: 0.5
              }}
            />
          </BaseMap>
        </YMaps>
      </div>
    </>
  );
};

export default YandexMap;
