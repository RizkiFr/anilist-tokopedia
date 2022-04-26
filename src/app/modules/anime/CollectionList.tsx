/** @jsxImportSource @emotion/react */

import React, { useContext, useState } from "react";
import AddCollectionModal from "../../components/AddCollectionModal";
import AppButton from "../../components/AppButton";
import CollectionCard from "../../components/CollectionCard";
import { removeCollection } from "../../state/actions";
import Context from "../../state/Context";

type Props = {};

const CollectionList = (props: Props) => {
  const [state, dispatch] = useContext(Context.AppContext);
  const [open, setOpen] = useState<boolean>(false);

  const confirmDelete = (name: string) => {
    if (window.confirm(`Are you sure want to delete ${name}?`)) {
      dispatch(removeCollection(name));
    }
  };
  return (
    <div css={{ padding: 16, minHeight: '85vh' }}>
      <div css={{ justifyContent: "end", display: "flex" }}>
        <AppButton title="Add Collection" onClick={() => setOpen(true)} />
      </div>
      <AddCollectionModal isOpen={open} onRequestClose={() => setOpen(false)} />
      {state.collectionNames?.map((v: string, i: number) => (
        <CollectionCard key={i.toString()} name={v} confirmDelete={()=>confirmDelete(v)} />
      ))}
    </div>
  );
};

export default CollectionList;
