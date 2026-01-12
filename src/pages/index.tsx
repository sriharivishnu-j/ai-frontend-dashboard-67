import { motion } from 'framer-motion';
import { trpc } from '../utils/trpc';

export default function Home() {
  const { data, isLoading } = trpc.getData.useQuery({ limit: 5 });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">AI-Driven Real-time Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data?.map((item) => (
          <motion.div
            key={item.id}
            className="p-4 border rounded shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <p className="text-xl">Value: {item.value.toFixed(2)}</p>
            <p className="text-gray-500">Time: {item.time.toLocaleTimeString()}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}