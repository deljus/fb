import React, { FC } from "react";
import Button from "./Button";

export default {
  title: "Button",
  parameters: {
    info: { inline: true }
  }
};

export const base: FC = () => (
  <div className="main">
    <div className="btn-wrapper">
      <Button type="primary">primary</Button>
      <Button type="secondary">secondary</Button>
      <Button type="danger">danger</Button>
      <Button type="warning">warning</Button>
      <Button type="info">info</Button>
    </div>
  </div>
);

export const sizes: FC = () => (
  <div className="main">
    <div className="btn-wrapper">
      {(["sm", "md", "lg"] as Array<"sm" | "md" | "lg">).map(size => (
        <div key={`wrap-${size}`}>
          <Button type="primary" size={size}>
            {`primary-${size}`}
          </Button>
          <Button type="secondary" size={size}>
            {`secondary-${size}`}
          </Button>
          <Button type="danger" size={size}>
            {`danger-${size}`}
          </Button>
          <Button type="warning" size={size}>
            {`warning-${size}`}
          </Button>
          <Button type="info" size={size}>
            {`info-${size}`}
          </Button>
        </div>
      ))}
    </div>
  </div>
);

export const circle: FC = () => (
  <div className="main">
    <div className="btn-wrapper">
      <Button type="primary" circle>
        primary
      </Button>
      <Button type="secondary" circle>
        secondary
      </Button>
      <Button type="danger" circle>
        danger
      </Button>
      <Button type="warning" circle>
        warning
      </Button>
      <Button type="info" circle>
        info
      </Button>
    </div>
  </div>
);

export const ghost: FC = () => (
  <div className="main">
    <div className="btn-wrapper">
      <Button type="primary" ghost>
        primary
      </Button>
      <Button type="secondary" ghost>
        secondary
      </Button>
      <Button type="danger" ghost>
        danger
      </Button>
      <Button type="warning" ghost>
        warning
      </Button>
      <Button type="info" ghost>
        info
      </Button>
    </div>
  </div>
);
