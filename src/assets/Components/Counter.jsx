import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const Counter = ({ title, value, onDelete, onChange }) => {
  return (
    <div className='bg-gray-200 flex flex-col px-4 w-[350px] h-[210px] space-y-4 rounded-md pb-10'>
      <div className='flex justify-between pt-4'>
        <p className='font-semibold text-[20px]'>{title}</p>
        <button onClick={onDelete}>
          <DeleteForeverIcon />
        </button>
      </div>
      <div>
        <p className='text-center text-[#3B82F6] text-3xl font-semibold'>
          {value}
        </p>
      </div>

      <div className='flex mx-auto space-x-5'>
        <button
          className='bg-[#8B5CF6]/20 text-[#6D28D9] cursor-pointer rounded-sm px-1 py-1'
          onClick={() => onChange(value - 1)}
        >
          <RemoveCircleOutlineIcon />
          Decrease
        </button>
        <button
          className='bg-[#10B981] text-[#047857] cursor-pointer rounded-sm px-1 py-1'
          onClick={() => onChange(value + 1)}
        >
          <AddCircleOutlineIcon />
          Increase
        </button>
      </div>
      <div className='flex justify-center'>
        <button
          className='bg-[#F3F4F6] cursor-pointer rounded-sm px-1 py-1 w-full'
          onClick={() => onChange(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
