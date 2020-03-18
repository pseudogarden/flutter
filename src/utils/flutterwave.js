import Ravepay from 'ravepay';
import env from '../env';
import ApiError from './apiError';

const {
  FLUTTERWAVE_PUBLIC,
  FLUTTERWAVE_SECRET
} = env;

const rave = new Ravepay(FLUTTERWAVE_PUBLIC, FLUTTERWAVE_SECRET, false);

const Flutterwave = {
  /**
   * create subaccount
   * @param {obj} payload - { email, amount, }
   * @returns {JSON} - Returns json with paystack url
   * @memberof Flutterwave
   */
  async createSubaccount(payload) {
    try {
      const account = await rave.Subaccount.create({
        ...payload,
        split_type: 'percentage',
        split_value: '0.2'
      });
      console.log(payload);
      return account;
    } catch (error) {
      throw new ApiError(400, error.message);
    }
  },

  /**
   * fetch subaccount
   * @param {string} id - subaccount id
   * @returns {JSON} - Returns json with paystack url
   * @memberof Flutterwave
   */
  async fetchSubaccount(id) {
    try {
      const account = await rave.Subaccount.fetch(id);
      return account;
    } catch (error) {
      console.log(error);
      throw new ApiError(400, error.message);
    }
  },

  /**
   * get all subaccounts
   * @returns {JSON} - Returns json with paystack url
   * @memberof Flutterwave
   */
  async listSubaccount() {
    try {
      const accounts = await rave.Subaccount.list();
      return accounts;
    } catch (error) {
      console.log(error);
      throw new ApiError(400, error.message);
    }
  }
};

export default Flutterwave;
