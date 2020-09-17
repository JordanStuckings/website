import React from "react";

import range from "lodash/range";

import { Grid, Cell } from "./styles";

const Snake = () => {
  return (
    <Grid>
      {range(250).map((i) => {
        return <Cell key={i} />;
      })}
    </Grid>
  );
};

export default Snake;
