import { GeoObjectProps, PlacemarkGeometry } from "react-yandex-maps";
import { PointType } from "./types";

export const preparePlaceMarkProps = (
  point: PointType
): GeoObjectProps<PlacemarkGeometry> => ({
  geometry: point.coordinates,
  properties: {
    balloonContent: point.name
  },
  modules: ["geoObject.addon.balloon"],
  options: {
    draggable: true,
    iconColor: point.color
  }
});
