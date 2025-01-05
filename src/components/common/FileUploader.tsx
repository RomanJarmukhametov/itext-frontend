/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState } from 'react';
import { getIcon } from '@/lib/icons';
import { toast } from 'react-toastify';
import { z } from 'zod';
import { fileAction } from '@/data/actions/file-action';

interface FileUploaderProps {
  onFilesUploaded: (uploadedFiles: { id: number }[]) => void; // Define the type for uploaded files
}

const MAX_TOTAL_FILE_SIZE_MB = 2; // Maximum total file size in MB

export default function FileUploader({}: FileUploaderProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);

  const fileSchema = z.array(
    z
      .instanceof(File)
      .refine((file) => file.size > 0, { message: 'File size must be greater than 0' })
      .refine((file) => !file.name.endsWith('.exe'), {
        message: 'Файлы с расширением .exe недопустимы',
      })
  );

  async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      const fileList = Array.from(event.target.files);

      // Calculate total size of selected files
      const totalSize = fileList.reduce((acc, file) => acc + file.size, 0);
      const totalSizeMB = totalSize / (1024 * 1024); // Convert to MB

      // Check if total size exceeds the limit
      if (totalSizeMB > MAX_TOTAL_FILE_SIZE_MB) {
        toast.error(`Общий размер файлов не должен превышать ${MAX_TOTAL_FILE_SIZE_MB} MB.`);
        return;
      }

      // Validate files
      const validation = fileSchema.safeParse(fileList);
      if (!validation.success) {
        toast.error('Ошибка при проверке файлов. Пожалуйста, выберите другие файлы.');
        console.error(validation.error.flatten().fieldErrors);
        return;
      }

      setFiles(fileList);

      // Upload files
      setUploading(true);
      const uploadResult = await fileAction({}, fileList);

      if (uploadResult.toastType === 'success') {
        // Save file IDs to local storage
        const uploadedFileIds = uploadResult.uploadedFiles.map((file: { id: number }) => ({
          id: file.id,
        }));
        localStorage.setItem('uploadedFileIds', JSON.stringify(uploadedFileIds));
        toast.success('Файлы успешно загружены!');
      } else {
        console.error(uploadResult.message);
        toast.error(uploadResult.message);
      }

      setUploading(false);
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
          className={`group flex p-6 items-center justify-center border-dashed border-2 h-52 border-coolGray-200 rounded-lg text-coolGray-300 cursor-pointer ${
            uploading ? 'opacity-50 pointer-events-none' : ''
          }`}
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
            </div>
          ))
        ) : (
          <p className="text-coolGray-500">Файлы не загружены.</p>
        )}
      </div>
    </>
  );
}
