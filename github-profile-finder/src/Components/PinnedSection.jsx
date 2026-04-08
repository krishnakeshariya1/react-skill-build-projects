import { RepoCard } from "./RepoCard";

export const PinnedSection = () => {
  return (
    <div>
      <h2 className="text-xl mb-4">Pinned</h2>

      <div className="grid grid-cols-2 gap-4 ">
        <RepoCard title="employee_management_system" />
        <RepoCard title="Expense-tracker" />
        <RepoCard title="Pattern-Questions" />
      </div>
    </div>
  );
};