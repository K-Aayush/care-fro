import Messages from "../../components/dashboard/home/Messages";
import caredeviLogo from "../../assets/caredeviBrand.png";
import DailyListData from "../../components/dashboard/home/DailyListData";

const DashboardHome = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-12 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <DailyListData />
            <section>
              <h2 className="text-5xl font-bold mb-6">Recent Activity</h2>
              <div className="border border-gray-300 rounded-lg p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-black">
                    New Prescription created for Olivia Jones
                  </h3>
                  <p className="text-base text-gray-600">
                    Yesterday Xolair 150mg
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <section className="border border-gray-300 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Upcoming Appointments</h2>
              <div className="space-y-3">
                <p className="text-base text-black">
                  Wednesday , Oct. 4 at 2:00 PM
                </p>
                <p className="text-base text-black">
                  Walter Bishop · Crohn´s Therapy
                </p>
              </div>
            </section>

            <section className="border border-gray-300 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Tasks</h2>
              <p className="text-base text-black">Review prior authorization</p>
            </section>

            <Messages />

            <button className="w-full border border-gray-300 rounded-full py-3 px-6 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
              <img src={caredeviLogo} alt="CareDevi AI" className="h-6" />
              <span className="text-base font-semibold">CareDevi AI</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
