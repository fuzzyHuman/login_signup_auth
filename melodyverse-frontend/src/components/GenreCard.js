import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { motion } from 'framer-motion';

const GenreCard = ({ genre, image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{ width: '100%', maxWidth: '300px' }} // Adjust the width of the card
    >
      <Card className="py-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: '#fff' }}>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{genre}</p>
          <h4 className="font-bold text-large">{genre} Mix</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt={`${genre} background`}
            className="object-cover rounded-xl"
            src={image}
            width={270}
            style={{ opacity: '0.7' }} // Apply opacity to the image
          />
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default GenreCard;
