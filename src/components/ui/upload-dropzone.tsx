'use client';

import { useRef } from 'react';
import { Card } from './card';
import { Button } from './button';

type UploadDropzoneProps = {
  title: string;
  fileUpload?: string;
  file?: File | null;
  onFile: (file: File) => void;
};

export function UploadDropzone({
  title,
  fileUpload = 'PNG ili JPG, jasna fotografija.',
  file,
  onFile,
}: UploadDropzoneProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Card className='p-6'>
      <div className='flex flex-col gap-4'>
        <div>
          <p className='text-sm font-medium text-neutral-900'>{title}</p>
          <p className='mt-1 text-sm text-neutral-500'>{fileUpload}</p>
        </div>

        <button
          type='button'
          onClick={() => inputRef.current?.click()}
          className='rounded-3xl border border-dashed border-neutral-300 bg-neutral-50 px-6 py-10 text-center text-sm text-neutral-600 transition hover:bg-neutral-100'
        >
          {file
            ? `Izabran fajl: ${file.name}`
            : 'Klikni da uploaduješ fotografiju'}
        </button>

        <input
          ref={inputRef}
          type='file'
          accept='image/png,image/jpeg,image/jpg'
          className='hidden'
          onChange={(e) => {
            const selectedFile = e.target.files?.[0];
            if (selectedFile) {
              onFile(selectedFile);
            }
          }}
        />

        {file ? (
          <Button
            type='button'
            variant='secondary'
            onClick={() => inputRef.current?.click()}
          >
            Promeni fotografiju
          </Button>
        ) : null}
      </div>
    </Card>
  );
}
