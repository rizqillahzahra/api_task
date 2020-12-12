import React from 'react';

const ProductComponent = ({ data }) => {
  // eslint-disable-next-line no-console
  console.log('product', data);
  return (
    <div>
      <table className="table table-borderless">
        <tbody>
          <tr className="row justify-content-md-center">
            <td className="col-7 ml-1">{data.name}</td>
            <td className="col-2">{data.description}</td>
            <td className="col-2">
              Harga: Rp
              {data.normal_price}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductComponent;
