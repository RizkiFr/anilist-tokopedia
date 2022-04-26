/** @jsxImportSource @emotion/react */

import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { addCollection } from "../state/actions";
import Context from "../state/Context";
import AppColors from "../styles/AppColors";
import AppButton from "./AppButton";
import AppInput from "./AppInput";

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
};

const AddCollectionModal = ({ isOpen, onRequestClose }: Props) => {
  const [state, dispatch] = useContext(Context.AppContext);
  const [collectionName, setCollectionName] = useState<string>("");
  const [error, setError] = useState<string>("");

  const onSave = () => {
    // eslint-disable-next-line no-useless-escape
    const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (format.test(collectionName)) {
      setError("Cant't use special characters");
    } else {
      const { collectionNames } = state;
      if (collectionNames?.includes(collectionName)) {
        setError("Collection name already exist");
      } else {
        dispatch(addCollection(collectionName));
        setCollectionName("");
        onRequestClose();
      }
    }
  };

  useEffect(() => {
    setError("");
  }, [collectionName]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      css={{
        padding: 16,
        margin: 16,
        border: "2px solid",
        borderColor: AppColors.lightgrey,
        backgroundColor: "white",
        borderRadius: 16,
      }}
      contentLabel="Add Collection Modal"
    >
      <p css={{ fontWeight: "bolder", fontSize: 18 }}>Add Collection</p>
      <AppInput
        value={collectionName}
        label="Collection Name"
        placeholder="Enter collection name"
        onChangeText={(v) => setCollectionName(v)}
        errorText={error}
      />
      <AppButton title="SAVE" onClick={onSave} style={{ width: "100%" }} />
    </Modal>
  );
};

export default AddCollectionModal;
