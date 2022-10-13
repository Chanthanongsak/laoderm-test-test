import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import Image from "next/image";
import { useRouter } from "next/router";
import ErrorPage from "next/error";

export default function Exterior({ imgList }) {
  const router = useRouter();
  if (!router.isFallback && !imgList) {
    return <ErrorPage statusCode={404} />;
  }

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

  return (
    <div className="content-img " id="exterior">
      {imgList.map((ex, index) => {
        return (
          <div
            key={index}
            style={{ position: "relative" }}
            className="spanUnset"
          >
            <Image
              className="img-fluid"
              alt="/"
              onClick={() => openImageViewer(index)}
              src={ex}
              width="1000"
              height="672"
            />
          </div>
        );
      })}

      {isViewerOpen && (
        <ImageViewer
          src={imgList}
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
  );
}
