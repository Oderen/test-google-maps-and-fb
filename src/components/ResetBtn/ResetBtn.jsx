import React from "react";
import { deleteAllDocuments } from "../../Firebase/api-operations";

const DeleteBtn = ({ resetMarkers }) => {
  const deleteMarkers = async () => {
    await deleteAllDocuments();
    resetMarkers();
  };
  return (
    <button className="delete-btn" type="reset" onClick={deleteMarkers}>
      123
    </button>
  );
};

export default DeleteBtn;
