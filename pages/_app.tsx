import "../styles/globals.css";

// components
import Layout from "../components/main/Layout";
import Transition from "../components/effects/Transition";
// router
import { useRouter } from "next/router";

// framer-moiton
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
