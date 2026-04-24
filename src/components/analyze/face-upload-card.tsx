import { UploadDropzone } from '@/components/ui/upload-dropzone';
import { UploadGuidelines } from './upload-guidelines';

type FaceUploadCardProps = {
  file?: File | null;
  onFile: (file: File) => void;
};

export function FaceUploadCard({ file, onFile }: FaceUploadCardProps) {
  return (
    <div className='grid gap-4 lg:grid-cols-[1fr_320px]'>
      <UploadDropzone
        title='Fotografija lica'
        fileUpload='Pošalji jasnu fotografiju lica bez filtera, naočara i jakih senki.'
        file={file}
        onFile={onFile}
      />

      <UploadGuidelines type='face' />
    </div>
  );
}
