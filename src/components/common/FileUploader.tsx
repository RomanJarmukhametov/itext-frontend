/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState } from 'react';
import { getIcon } from '@/lib/icons';

type UploadStatus = 'idle' | 'uploading' | 'success' | 'error';

export default function FileUploader() {
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<UploadStatus>('idle');
  const [uploadProgress, setUploadProgress] = useState(0);

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      const fileList = Array.from(event.target.files);
      setFiles(fileList);
    }
  }

  async function handleFileUpload() {
    if (files.length === 0) return;
    setStatus('uploading');
    const formData = new FormData();
    files.forEach((file) => formData.append('files', file));

    try {
      const response = await fetch('https://httpbin.org/post', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
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

      {files.length > 0 && status !== 'uploading' && (
        <button onClick={handleFileUpload}>Загрузить</button>
      )}

      {status === 'success' && <p className="text-green-500">Файлы успешно загружены.</p>}

      {status === 'error' && <p className="text-red-500">Ошибка загрузки файлов.</p>}

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
