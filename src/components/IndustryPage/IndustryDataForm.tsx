import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Station } from '../../models/Station';
import { useTrainsData } from '../../data/TrainsContext';

type IndustryFields = {
  industryName: string;
  station: Station;
};
export const IndustryDataForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IndustryFields>();

  const onSubmit: SubmitHandler<IndustryFields> = (data: IndustryFields) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register('industryName', { required: true })} placeholder='Industry Name' />
          {errors.industryName && <span>You must enter an industry name.</span>}
        </div>
        <div>
          <select {...register('station')}>
            <option value='female'>female</option>
            <option value='male'>male</option>
            <option value='other'>other</option>
          </select>
        </div>
        <input type='submit' />
      </form>
    </div>
  );
};
