import React from 'react';
import PropTypes from 'prop-types';
import styles from './carousel.module.scss';
import useTransition from './useTransition';

export default function Carousel({ children, width, unit }) {
    const {
        translate,
        items,
        setAction,
    } = useTransition(width, children);

  const handleNext = () => setAction('next');
  const handlePrev = () => setAction('prev');

    return (
        <div
            className={styles.parent}
            style={{
                width: `${width}${unit}`,
            }}
        >
            <div className={styles.container}> {/* Outer carousel container (visible width) */}
                <div
                    className={styles.inner}
                    style={{
                        width: `${width * items.length}${unit}`,
                        transform: `translateX(-${translate}${unit})`,
                    }}
                > {/* inner carousel container (width of entire carousel) */}
                    {
                        items.map(item => (
                            <div
                                className={styles.item}
                                style={{
                                    width: `${width}${unit}`,
                                }}
                            > {/* carousel item container */}
                                {item}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={styles.controls}> {/* carousel controls container */}
                <button
                    className={styles.next}
                    onClick={handleNext}
                >
                    Next
                </button>
                <button
                    className={styles.prev}
                    onClick={handlePrev}
                >
                    Prev
                </button>
            </div>
        </div>
    );
}

Carousel.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]).isRequired,
    width: PropTypes.number,
    unit: PropTypes.string,
};

Carousel.defaultProps = {
    width: 500,
    unit: 'px',
};