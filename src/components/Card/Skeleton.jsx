import React from "react";
import ContentLoader from "react-content-loader";
import styles from './Card.module.scss';

const Skeleton = () => (
    <ContentLoader
        className={styles.skeleton}
        speed={2}
        width={210}
        height={280}
        viewBox="0 0 210 280"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="30" y="74" rx="5" ry="5" width="150" height="90" />
        <rect x="81" y="35" rx="0" ry="0" width="0" height="1" />
        <rect x="30" y="180" rx="5" ry="5" width="150" height="28" />
        <rect x="30" y="220" rx="5" ry="5" width="75" height="32" />
        <rect x="150" y="220" rx="5" ry="5" width="32" height="32" />
    </ContentLoader>
)

export default Skeleton;