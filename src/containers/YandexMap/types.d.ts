export interface PointType {
  id: string;
  name: string;
  color: string;
  coordinates: [number, number];
}

export interface YandexMapInterface {
  startLoading?: () => any;
  stopLoading?: () => any;
  setError?: (id: string, text: string) => any;
  loading: boolean;
  changeCenter?: ([number, number]) => any;
  points: Array<PointType>;
  changePointCoordinate?: (id: string, coordinates: [number, number]) => any;
}
