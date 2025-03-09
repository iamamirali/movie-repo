import { genreOptions } from '@/lib/constants';
import { Button } from '../button';
import { Input, Select, Upload } from '../input';
import { Modal } from './Modal';

type TProps = {
  actionType: 'Edit' | 'Add';
  onClose: () => void;
  formAction: (formData: FormData) => void;
};

export const MovieModificationModal = (props: TProps) => {
  const { onClose, actionType, formAction } = props;

  return (
    <Modal
      title={`${actionType} Movie`}
      subtitle="Enter details of your movie"
      onClose={onClose}
      className="lg:w-[60%] lg:min-w-[42rem] flex flex-col"
    >
      <form action={formAction} className="flex flex-col overflow-auto pb-20">
        <div className="flex flex-col gap-4 overflow-auto">
          <Input label="Name" name="name" />
          <Select
            multiSelect
            name="genre"
            label="Genre"
            options={genreOptions}
          />
          <div className="flex gap-4 w-full mb-2">
            <Input label="Year" name="year" type="number" />
            <Input label="Rating" name="rating" type="number" step="0.1" />
          </div>
          <Upload label="Upload Movie Poster" />
        </div>

        <div className="flex justify-end gap-4 text-right absolute bottom-6 z-0 w-full left-0 right-0 px-6">
          <Button
            title="Cancel"
            type="button"
            onClick={onClose}
            className="border border-neutral-50 text-neutral-50 !w-2/5 md:!w-32 !h-12 !text-base !rounded-xl"
          />
          <Button
            title={`${actionType} Movie`}
            type="submit"
            className="bg-yellow-400 !h-12 text-neutral-700 !w-3/5 md:!w-48 !text-base !rounded-xl"
          />
        </div>
      </form>
    </Modal>
  );
};
