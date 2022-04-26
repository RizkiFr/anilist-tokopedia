/** @jsxImportSource @emotion/react */

import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { Anime } from "../models/anime";
import {
  addCollection,
  addToCollection,
  removeFromCollection,
  updateToCollection,
} from "../state/actions";
import Context from "../state/Context";
import AppColors from "../styles/AppColors";
import AppButton from "./AppButton";
import AppInput from "./AppInput";

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
  data: Anime;
};

const AddToCollectionModal = ({ isOpen, onRequestClose, data }: Props) => {
  const [state, dispatch] = useContext(Context.AppContext);
  const [collectionName, setCollectionName] = useState<string>("");
  const [collectionOf, setCollectionOf] = useState<Array<string>>([]);
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
      }
    }
  };

  const handleSaveToCollection = () => {
    if (collectionOf.length === 0) {
      dispatch(removeFromCollection(data.id));
    } else {
      const isCollection = state.collections.find(
        (v: Anime) => v.id === data.id
      );
      if (isCollection) {
        const updatetedData = state.collections.map((v: Anime) => {
          if (v.id === data.id) {
            return { ...data, collectionOf };
          } else {
            return v;
          }
        });
        dispatch(updateToCollection(updatetedData));
      } else {
        dispatch(addToCollection({ ...data, collectionOf }));
      }
    }
    setCollectionOf([]);
    onRequestClose();
  };

  useEffect(() => {
    setError("");
  }, [collectionName]);

  useEffect(() => {
    setCollectionOf(data.collectionOf??[])
  }, [data.collectionOf]);

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
      contentLabel="Add To Collection Modal"
    >
      <p css={{ fontWeight: "bolder", fontSize: 18 }}>Add To Collection</p>
      <div css={{ display: "flex", alignItems: "center" }}>
        <AppInput
          value={collectionName}
          placeholder="Enter new collection name"
          onChangeText={(v) => setCollectionName(v)}
          errorText={error}
          style={{ width: "100%", margin: "8px 16px 8px 0px" }}
        />
        <AppButton title="ADD" onClick={onSave} style={{}} />
      </div>
      <div css={{ display: "flex", flexWrap: "wrap", marginTop: 16 }}>
        {state.collectionNames?.map((v: string, i: number) => {
          const isSelected = collectionOf.includes(v);
          return (
            <span
              key={i.toString()}
              css={{
                padding: 8,
                borderRadius: 8,
                border: "1px solid gray",
                margin: 4,
                color: isSelected ? "white" : "black",
                backgroundColor: isSelected ? AppColors.pink : "white",
              }}
              onClick={() => {
                if (isSelected) {
                  setCollectionOf((prev) => prev.filter((val) => val !== v));
                } else {
                  setCollectionOf((prev) => [...prev, v]);
                }
              }}
            >
              {v}
            </span>
          );
        })}
      </div>
      <AppButton
        title="SAVE"
        onClick={handleSaveToCollection}
        style={{ width: "100%" }}
      />
    </Modal>
  );
};

export default AddToCollectionModal;
