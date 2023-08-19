import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={482.48}
        height={102}
        viewBox="0 0 482.48 102"
        backgroundColor="#ffffff"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="81" y="35" rx="0" ry="0" width="0" height="1" />
        <rect x="10" y="10" rx="0" ry="0" width="335" height="16" />
        <rect x="10" y="31" rx="0" ry="0" width="125" height="17" />
        <rect x="362" y="10" rx="0" ry="0" width="100" height="55" />
    </ContentLoader>
)

export default Skeleton;