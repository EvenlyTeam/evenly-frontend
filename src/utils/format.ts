export const formatNumber = (value: number): string =>
  value.toLocaleString('ko-KR');

export const formatKRW = (value: number): string => `${formatNumber(value)}원`;
