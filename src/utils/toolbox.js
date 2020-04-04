/**
 * function objectfor api tools methods
 *
 * @function Toolbox
 */
const Toolbox = {
  /**
   * Generates a JSON response for success scenarios.
   * @function
   * @param {Response} res - Response object.
   * @param {object} data - The payload.
   * @param {number} code -  HTTP Status code.
   * @returns {JSON} - A JSON success response.
   * @memberof Toolbox
   */
  successResponse(res, data, code = 200) {
    return res.status(code).json({
      status: 'success',
      data
    });
  },

  /**
   * Generates a JSON response for failure scenarios.
   * @function
   * @param {Response} res - Response object.
   * @param {object} options - The payload.
   * @param {number} options.code -  HTTP Status code, default is 500.
   * @param {string} options.message -  Error message.
   * @param {object|array  } options.errors -  A collection of  error message.
   * @returns {JSON} - A JSON failure response.
   * @memberof Toolbox
   */
  errorResponse(res, { code = 500, message = 'Some error occurred while processing your Request', errors }) {
    return res.status(code).json({
      status: 'fail',
      error: {
        message,
        errors
      }
    });
  },

  /**
   * add bank details to holder
   * @param {object} holder
   * @param {object} details
   * @returns {object} holder with details
   */
  addBank(holder) {
    holder.bankDetails = {
      account_bank: '044',
      account_number: '0690000031',
      business_name: holder.companyName,
      business_email: holder.email,
      business_contact: `${holder.firstName} ${holder.lastName}`,
      business_contact_mobile: holder.phoneNumber,
      business_mobile: holder.phoneNumber,
      meta: [{ metaname: 'MarketplaceID', metavalue: 'ggs-920900' }]
    };
    return holder;
  }
};

export default Toolbox;
