import React from "react";
import { storiesOf } from "@storybook/react";
import { Icon } from "../Icon";
import { select } from "@storybook/addon-knobs";

const options = {
  edit: "edit",
  user: "user",
};

storiesOf("Icon", module).add("Icon", () => {
  return <Icon of={select("Of", options, "edit")} size="big" />;
});
