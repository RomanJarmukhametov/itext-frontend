/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use server';

import { FileService } from '@/data/services/file-service';

export async function fileAction(prevState: any, files: File[] | null) {
  if (!files || files.length === 0) {
    return {
      ...prevState,
      uploadedFiles: [],
      toastMessage: 'No files to upload.',
      toastType: 'success',
    };
  }

  try {
    const response = await FileService(files);

    if (response.error) {
      return {
        ...prevState,
        strapiErrors: response.error,
        message: 'Ошибка при загрузке файлов. Попробуйте ещё раз.',
      };
    }

    const uploadedFiles = response.map((file: { id: number }) => ({
      id: file.id,
    }));

    return {
      ...prevState,
      uploadedFiles,
      toastMessage: 'Файлы успешно загружены!',
      toastType: 'success',
    };
  } catch (error) {
    console.error('File Upload Error:', error);
    return {
      ...prevState,
      strapiErrors: null,
      message: 'Непредвиденная ошибка при загрузке файлов. Попробуйте ещё раз.',
    };
  }
}
