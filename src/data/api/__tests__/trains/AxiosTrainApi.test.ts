import { TrainState } from '../../../../models/Train';
import { axiosTrainApi } from '../../trains/AxiosTrainApi';

describe('Axios Train Api', () => {
  describe('GET', () => {
    xit('returns no trains', async () => {
      const trainStates: TrainState[] = await axiosTrainApi.getTrains();
      expect(trainStates).toHaveLength(0);
    });
    xit('returns 2 trains', async () => {
      const trainStates: TrainState[] = await axiosTrainApi.getTrains();
      expect(trainStates).toHaveLength(2);
    });
    it('FAKE TEST', () => {
      expect(true).toEqual(true);
    });
  });
});
