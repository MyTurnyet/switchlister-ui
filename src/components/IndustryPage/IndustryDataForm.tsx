import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Station } from '../../models/Station';
import { useStationsData } from '../../data/StationsContext';

type IndustryFields = {
  industryName: string;
  station: Station;
};
export const IndustryDataForm = () => {
  const { stations, refreshData } = useStationsData();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IndustryFields>();
  useEffect(() => {
    refreshData();
  }, []);
  const onSubmit: SubmitHandler<IndustryFields> = (data: IndustryFields) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Industry Name:</label>
          <input {...register('industryName', { required: true })} placeholder='Industry Name' />
          {errors.industryName && <span>You must enter an industry name.</span>}
        </div>
        <div>
          <label>Station: </label>
          <select
            {...register('station', { required: true })}
            value={''}
            placeholder={'station selector'}
          >
            <option value={''} disabled={true}>
              Select one...
            </option>
            {stations.map((station: Station) => (
              <option key={station.name} value={station.name}>
                {station.name}
              </option>
            ))}
          </select>
          {errors.station && <span>You must select a station for this industry.</span>}
        </div>
        <input type='submit' />
      </form>
    </div>
  );
};
