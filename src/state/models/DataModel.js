import { action, thunk, computed } from 'easy-peasy';
import history from '../../history';
import { id, convertToInt } from 'utils';

const DataModel = {
  dataBloecke: null,
  dataWahlbezirke: null,
  detailData: false,
  highlightData: false,
  selectedData: false,
  isLoading: computed(state => !state.data),
  loadBloeckeDataSuccess: action((state, payload) => {
    state.dataBloecke = payload;
  }),
  loadWahlbezirkeSuccess: action((state, payload) => {
    state.dataWahlbezirke = payload;
  }),
  loadDataFail: action(state => {
    state.data = null;
  }),
  loadData: thunk(async actions => {
    try {
      const bloecke = await fetch('/data/bloecke.geojson');
      const wahlbezirke = await fetch('/data/wahlbezirke.geojson');

      const dataBloecke = await bloecke.json();
      const dataWahlbezirke = await wahlbezirke.json();

      const parsedDataWahlbezirke = convertToInt(dataWahlbezirke,['WahlbezirkNummer']);
      const parsedDataBloecke = convertToInt(dataBloecke,['BlockNummer', 'Bevoelkerung', 'WahlbezirkNummer']);

      actions.loadBloeckeDataSuccess(parsedDataBloecke);
      actions.loadWahlbezirkeSuccess(parsedDataWahlbezirke);
    } catch (_) {
      actions.loadDataFail();
    }
  }),
  enrichedData: computed(state => {
    // do data transformation here!
    if (state.data) {
      return state.data;
    } else {
      return null;
    }
  }),
  filteredData: computed(state => state.data),
  setHighlightData: action((state, payload) => (state.highlightData = payload)),
  setSelectedData: action((state, payload) => (state.selectedData = payload)),
  setDetailRoute: action((state, payload) => {
    if (payload) {
      const nextLocation = `?location=${payload}`;
      return history.push(nextLocation);
    }
    history.push(history.location.pathname.replace(/\?location=.+/, ''));
    state.detailData = false;
  }),
  setDetailRouteWithListPath: action((state, payload) => {
    if (payload) {
      const nextLocation = `/liste?location=${payload}`;
      return history.push(nextLocation);
    }
    history.push(history.location.pathname.replace(/\?location=.+/, ''));
    state.detailData = false;
  })
};

export default DataModel;