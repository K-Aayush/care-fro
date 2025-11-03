import { dailyListData } from "../../../lib/data";

const DailyListData = () => {
  return (
    <section>
      <h1 className="text-5xl font-bold mb-6">Daily List</h1>
      <div className="border border-gray-300 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-base font-semibold text-black">
                MRN
              </th>
              <th className="px-6 py-4 text-left text-base font-semibold text-black">
                Patient
              </th>
              <th className="px-6 py-4 text-left text-base font-semibold text-black">
                Status
              </th>
              <th className="px-6 py-4 text-left text-base font-semibold text-black">
                Diagnosis
              </th>
              <th className="px-6 py-4 text-left text-base font-semibold text-black">
                Date of birth
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {dailyListData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-base text-black">{row.mrn}</td>
                <td className="px-6 py-4 text-base text-black">
                  {row.patient}
                </td>
                <td className="px-6 py-4 text-base text-black">{row.status}</td>
                <td className="px-6 py-4 text-base text-black">
                  {row.diagnosis}
                </td>
                <td className="px-6 py-4 text-base text-black">{row.dob}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DailyListData;
