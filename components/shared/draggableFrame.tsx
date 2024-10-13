'use client';

import {motion} from "framer-motion";
import Draggable from "react-draggable";

interface Props {
  className?: string;
}

export const DraggableFrame: React.FC<Props> = ({ className }) => {
  return (
      <Draggable bounds="parent">
          <motion.div className="pomodoro-timer bg-gray-800 text-white p-6 rounded-lg shadow-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{ minWidth: '300px', textAlign: 'center' }}>
              <div className={className}>
                  THIS FRAM IS DRAGGABLE
              </div>
          </motion.div>
      </Draggable>
  );
};