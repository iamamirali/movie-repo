import { FaFilter, FaSort } from 'react-icons/fa';
import { Button } from './components';
import { FaPlus } from 'react-icons/fa6';

export const MoviesList = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <Button
            title="Newest"
            Icon={FaSort}
            className="bg-neutral-200 text-neutral-0"
          />
          <Button
            title="Filters"
            Icon={FaFilter}
            className="bg-neutral-200 text-neutral-0"
            iconClassName="text-sm"
          />
        </div>
        <Button title="Add" Icon={FaPlus} className="text-neutral-700" />
      </div>
    </div>
  );
};
