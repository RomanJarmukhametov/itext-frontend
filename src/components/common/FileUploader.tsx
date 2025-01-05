/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState } from 'react';
import { getIcon } from '@/lib/icons';

export default function FileUploader({
  onFilesSelected,
}: {
  onFilesSelected: (files: File[]) => void;
}) {
  const [files, setFiles] = useState<File[]>([]);

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      const fileList = Array.from(event.target.files);
      setFiles(fileList);
      onFilesSelected(fileList); // Notify parent component
    }
  }

  function formatFileSize(size: number): string {
    if (size < 1024) return `${size} Bytes`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
  }

  return (
    <>
      <div className="mb-8">
        <label
          htmlFor="file-input"
          className="group flex p-6 items-center justify-center border-dashed border-2 h-52 border-coolGray-200 rounded-lg text-coolGray-300 cursor-pointer"
        >
          <div className="max-w-max text-center">
            <div className="inline-block mb-4">
              <span className="text-blue-500 group-hover:text-blue-600 transition-colors duration-200">
                {getIcon('FileUpload')}
              </span>
            </div>
            <p className="mb-2">
              <span className="text-coolGray-500">Перетащите файл или</span>{' '}
              <span className="text-blue-500 group-hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                загрузите с компьютера
              </span>
            </p>
            <span className="text-sm text-coolGray-300 font-medium">
              Файлы в формате .pdf, .docx, .pptx, .xlsx, .jpg, .png
            </span>
          </div>
          <input
            id="file-input"
            type="file"
            className="hidden"
            onChange={handleFileChange}
            multiple
          />
        </label>
      </div>

      <div className="mb-8">
        <label className="block mb-2 text-coolGray-800 font-medium leading-6">Файлы</label>
        {files.length > 0 ? (
          files.map((file, index) => (
            <div
              key={index}
              className="p-6 mb-6 bg-white border border-coolGray-200 rounded-md shadow-md"
            >
              <div className="flex mb-3 flex-wrap items-center justify-between">
                <p className="flex w-full sm:w-auto mb-1 sm:mb-0 items-center">
                  {getIcon('File')}
                  <span className="ml-2 text-coolGray-800 font-medium">{file.name}</span>
                </p>
                <span className="text-coolGray-300">{formatFileSize(file.size)}</span>
              </div>
              <div className="relative w-full h-2 bg-darkCoolGray-100 rounded-full overflow-hidden">
                <div className="absolute top-0 bottom-0 left-0 w-3/12 bg-blue-500 rounded-full" />
              </div>
            </div>
          ))
        ) : (
          <p className="text-coolGray-500">Файлы не загружены.</p>
        )}
      </div>
    </>
  );
}
