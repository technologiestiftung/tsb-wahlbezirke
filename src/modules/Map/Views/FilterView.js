import React, { Fragment } from 'react';
import { useStoreState } from 'easy-peasy';

import GeojsonLayer from '../Layer/GeojsonLayer';

const FilterView = p => {
  const dataWahlbezirke = useStoreState(state => state.dataWahlbezirke);
  const dataBloecke = useStoreState(state => state.dataBloecke);
  return (
    <Fragment>
      { dataWahlbezirke && (
        <GeojsonLayer data={dataWahlbezirke} />
      )}
      { dataBloecke && (
        <GeojsonLayer data={dataBloecke} />
      )}
    </Fragment>
  )
}

export default FilterView;