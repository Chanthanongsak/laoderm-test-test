import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import Image from "next/image";

export default function All({
  videoList,
  exteriorList,
  interiorList,
  poolList,
  saunaList,
  spaList,
  restuarantList,
  cigarList,
  lobbyList,
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const AllImageList = [
    ...videoList,
    ...exteriorList,
    ...interiorList,
    ...poolList,
    ...saunaList,
    ...spaList,
    ...restuarantList,
    ...cigarList,
    ...lobbyList,
  ];

  return (
    <>
      <div className="content-img">
        {AllImageList.map((image, index) => {
          return (
            <div key={index} style={{ position: "relative" }}>
              <a href="#">
                <Image
                  className="img-fluid"
                  alt="/"
                  src={image}
                  onClick={() => openImageViewer(index)}
                  width="1000"
                  height="672"
                />
              </a>
            </div>
          );
        })}

        {isViewerOpen && (
          <ImageViewer
            src={AllImageList}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            disableScroll={false}
            backgroundStyle={{
              backgroundColor: "rgba(0,0,0,0.9)",
            }}
            closeOnClickOutside={true}
          />
        )}
      </div>
    </>
  );
}
