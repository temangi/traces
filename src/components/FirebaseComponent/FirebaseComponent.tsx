import React, { useState, useEffect } from "react";
import { db } from "@/firebase/firebase-config";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import scss from "./FirebaseComponent.module.scss";

function FirebaseComponent() {
  const [newTourImg, setNewTourImg] = useState("");
  const [newTourName, setNewTourName] = useState("");
  const [deleteTourId, setDeleteTourId] = useState("");

  const [data, setData] = useState<any[]>([]);
  const datasetCollectionRef = collection(db, "tour");

  const createTour = async () => {
    await addDoc(datasetCollectionRef, {
      image: newTourImg,
      tourname: newTourName,
    });
  };

  const deleteTour = async (tourId: string) => {
    await deleteDoc(doc(datasetCollectionRef, tourId));
  };

  useEffect(() => {
    const getDataset = async () => {
      const result = await getDocs(datasetCollectionRef);
      setData(result.docs.map((item) => ({ ...item.data(), id: item.id })));
    };
    getDataset();
  }, []);

  useEffect(() => {
    if (deleteTourId !== "") {
      deleteTour(deleteTourId);
      setDeleteTourId("");
    }
  }, [deleteTourId]);

  return (
    <div className="container">
      <input
        placeholder="Tour Image..."
        onChange={(event) => {
          setNewTourImg(event.target.value);
        }}
      />
      <input
        placeholder="Tour Name..."
        onChange={(event) => {
          setNewTourName(event.target.value);
        }}
      />

      <button onClick={createTour}>Add Tour</button>

      {data.map((tour) => (
        <div className={scss.tour__card} key={tour.id}>
          <img src={tour.image} alt="" />
          <div className={scss.tour__day}>
            <b>12 days</b>
          </div>
          <div className={scss.card__content}>
            <b>Tour name:</b>
            <h5>{tour.tourname}</h5>
          </div>
          <button onClick={() => setDeleteTourId(tour.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default FirebaseComponent;
