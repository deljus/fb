import React, { FC, FormEvent, KeyboardEvent } from "react";
import { PointNameInterface } from "./type";

const PointNameInput: FC<PointNameInterface> = ({ disabled, addPoint }) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    const value = e.currentTarget.value.trim();
    if (e.key === "Enter" && value && addPoint) {
      addPoint(value);
      e.currentTarget.value = "";
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <form className="point-name-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Point name</label>
        <input type="text" onKeyDown={handleKeyDown} disabled={disabled} />
      </div>
    </form>
  );
};

export default PointNameInput;
