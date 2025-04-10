export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 hover:scale-105 transition-all">
      <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-2" />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
    </div>
  );
}
