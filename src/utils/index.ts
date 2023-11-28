export const getPaginatedResponse = <Row = unknown>(rows: Row[]): PaginatedResponse<Row> => {
  return { rows, metadata: { count: 0, limit: 0, offset: 0 } };
};

export type PaginatedResponse<Row = unknown> = {
  rows: Row[];
  metadata: { count: number; limit: number; offset: number };
};
