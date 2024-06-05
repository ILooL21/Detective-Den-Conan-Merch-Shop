import { Suspense, useRef } from 'react';
import PropTypes from 'prop-types';
import { useFirstViewportEntry } from './useFirstViewportEntry';

const RenderOnViewportEntry = ({
  children,
  threshold = 0,
  root = null,
  rootMargin = '0px 0px 0px 0px',
  ...wrapperDivProps
}) => {
  const ref = useRef();
  const entered = useFirstViewportEntry(ref, { threshold, root, rootMargin });

  return (
    <div {...wrapperDivProps} ref={ref}>
      {entered ? (
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

RenderOnViewportEntry.propTypes = {
  children: PropTypes.node.isRequired,
  threshold: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  root: PropTypes.instanceOf(Element),
  rootMargin: PropTypes.string,
};

export default RenderOnViewportEntry;
