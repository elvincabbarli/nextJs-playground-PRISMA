/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import React, { useState } from "react";

interface CloudinaryResult {
  public_id: string;
}

const UploadImage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <div>
      {publicId && (
        <CldImage width={270} height={180} src={publicId} alt="some text" />
      )}
      <CldUploadWidget
      options={{
        sources: ['local']
      }}
        uploadPreset="initialUpload"
        onSuccess={(result, widget) => {
          if (result.event !== "success") {
            return;
          }
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button
            style={{ backgroundColor: "lightblue" }}
            onClick={() => open()}
          >
            Upload Image
          </button>
        )}
      </CldUploadWidget>
    </div>
  );
};

export default UploadImage;
