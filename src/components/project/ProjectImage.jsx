// React Dependencies
import React, { useState, useLayoutEffect, useRef } from "react";

// External Dependencies
import { motion } from "framer-motion";
import { useWindowSize } from "@uidotdev/usehooks";

// Internal Dependencies
import { Sleep } from "../../utils/utils";

const ProjectItem = ({ src, url, alt }) => {
  const imageRef = useRef(null);
  const [styles, setStyle] = useState({ width: "500px" });
  const window = useWindowSize();

  const onProjectClickedHandler = async () => {
    // delay for animation to complete
    await Sleep(100);
  };

  useLayoutEffect(() => {
    const image = imageRef.current.getBoundingClientRect();
    setStyle({ width: image.width, height: image.width / 2 + 15 });
  }, [window]);

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      style={{ position: 'relative' }}
      onClick={onProjectClickedHandler}
    >
      <motion.div
        ref={imageRef}
        style={{ position: 'relative', zIndex: '10', cursor: 'pointer' }}
        whileHover={{ x: -15, y: -15 }}
        whileTap={{ x: 0, y: 0 }}
      >
        <img style={{ borderRadius: '8px', ...styles }} src={src} alt={alt} />
      </motion.div>

      <div style={styles} className={`project-image infinity-loader infinity-loader-color-${alt}`} />
    </a>
  );
};

export default ProjectItem;
