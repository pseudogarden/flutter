import { Toolbox, Flutterwave } from '../utils';
import {
  supplierA
} from '../database/supplier';

const {
  errorResponse,
  successResponse,
  addBank
} = Toolbox;
const {
  createSubaccount,
  fetchSubaccount,
  listSubaccount
} = Flutterwave;

const Pay = {
  /**
   * create a supplier subaccount
   * @param {object} req
   * @param {object} res
   * @returns {JSON } A JSON response with the created order.
   */
  async addSubaccount(req, res) {
    try {
      const supplier = addBank(supplierA);
      const subaccount = await createSubaccount(supplier.bankDetails);
      successResponse(res, { message: 'subaccount created', subaccount });
    } catch (error) {
      if (error.status === 400) {
        return errorResponse(res, { code: error.status, message: error.message });
      }
      errorResponse(res, {});
    }
  },

  /**
   * get a subaccount
   * @param {object} req
   * @param {object} res
   * @returns {JSON } A JSON response with the created order.
   */
  async getSubaccount(req, res) {
    try {
      const subaccount = await fetchSubaccount('RS_5D402CF85680EC016AF6FEEEB807C077');
      successResponse(res, { message: 'subaccount retrieved', subaccount });
    } catch (error) {
      errorResponse(res, {});
    }
  },

  /**
   * list all subaccounts
   * @param {object} req
   * @param {object} res
   * @returns {JSON } A JSON response with the created order.
   */
  async allSubaccounts(req, res) {
    try {
      const accounts = await listSubaccount();
      successResponse(res, { message: 'all subaccounts retrieved', accounts });
    } catch (error) {
      errorResponse(res, {});
    }
  }

};

export default Pay;
