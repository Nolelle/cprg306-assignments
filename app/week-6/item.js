export default function Item({ name, quantity, category }) {
  return (
    <li className="p-4 bg-slate-100 border border-blue-200 rounded-lg text-left">
      <div className="text-lg font-bold text-blue-800">{name}</div>
      <div className="text-sm font-normal text-gray-600">
        Quantity: {quantity}
      </div>
      <div className="text-xs font-thin text-gray-500 italic">
        Category: {category}
      </div>
    </li>
  );
}
