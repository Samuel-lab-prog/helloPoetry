import { AnimatePresence, motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';

export default function AnimatedOutlet() {
  const location = useLocation();

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname}>
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
