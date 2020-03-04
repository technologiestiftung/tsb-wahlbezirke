import React, { Fragment } from 'react';
import { Layer, Feature } from 'react-mapbox-gl';
import { useStoreActions } from 'easy-peasy';
import { GeoJSONLayer } from 'react-mapbox-gl';

const linePaint = {
  'line-color': '#999',
  'line-width': 1.5
};

let fillPaint = {
  'fill-color': '#111',
  'fill-opacity': .5,
};

const GeojsonLayer = p => {
  const { id, data } = p;
  const setTooltipData = useStoreActions(actions => actions.setTooltipData);
  const setTooltipPos = useStoreActions(actions => actions.setTooltipPos);
  const setDetailRoute = useStoreActions(actions => actions.setDetailRoute);

  const renderFeat = (feat,i) => {
    const feature = (
      <Feature
        coordinates={feat.geometry.coordinates}
        key={`feat-${i}`}
        onMouseEnter={evt => handleMouseEnter(evt, feat)}
        onMouseLeave={evt => handleMouseLeave(evt)}
        onClick={evt => (handleClick(evt, feat))}
        // onTouchStart={evt => this.handleClick(evt)}
        properties={feat.properties}
      />
    );
    return feature;
  }

  const handleMouseEnter = (evt, { properties = {} }) => {
    evt.map.getCanvas().style.cursor = 'pointer';
    setTooltipData(properties);
  }

  const handleMouseLeave = (evt) => {
    evt.map.getCanvas().style.cursor = '';

    setTooltipData(null);
  }

  const handleClick = (evt, { properties = {} }) => {
    evt.originalEvent.preventDefault();
    evt.originalEvent.stopPropagation();

    setDetailRoute(properties.id);
  }

  const handleMouseMove = evt => {
    setTooltipPos([evt.lngLat.lng, evt.lngLat.lat]);
  }

  return (
    <Fragment>
      {data && (
        <Layer
          type="fill"
          paint={fillPaint}
          onMouseMove={evt => handleMouseMove(evt)}
        >
          {data.features.map((feat,i) => renderFeat(feat,i))}
        </Layer>
      )}
    </Fragment>
  )
}

export default GeojsonLayer;