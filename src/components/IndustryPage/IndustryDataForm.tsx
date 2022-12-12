import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type IndustryFields = {
  industryName: string;
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
        <input type='submit' />
      </form>
    </div>
  );
};
