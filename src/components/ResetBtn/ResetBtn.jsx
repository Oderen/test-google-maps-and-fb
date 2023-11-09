import React from "react";
import { deleteAllDocuments } from "../../Firebase/api-operations";

const DeleteBtn = ({ resetMarkers }) => {
  const deleteMarkers = async () => {
    await deleteAllDocuments();
    resetMarkers();
  };
  return (
    <button className="delete-btn" type="reset" onClick={deleteMarkers}>
      Delete all markers
    </button>
  );
};

export default DeleteBtn;
