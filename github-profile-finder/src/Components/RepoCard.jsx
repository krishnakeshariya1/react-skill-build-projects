export const RepoCard = ({ title }) => {
  return (
    <div className="border border-gray-700 p-4 rounded-lg ">
      <h3 className="text-blue-400">{title}</h3>
      <p className="text-sm text-gray-400 mt-2">JavaScript</p>
    </div>
  );
};