function TableRow({ title, contents }) {
    return (
      <tr className="border-b border-gray-600">
        <td className="p-4 font-bold text-gray-400">{title}</td>
        {contents.map((content, index) => (
          <td key={index} className="p-4 text-white">{content}</td>
        ))}
      </tr>
    );
  }
  
  export default TableRow;
  